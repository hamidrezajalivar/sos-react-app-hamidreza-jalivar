import React from 'react';
import _ from 'lodash';
import { blogList } from '../data';
import { useContext } from 'react';
import { useReducer } from 'react';


const UserContext = React.createContext();
const UserContextDispatcher = React.createContext();

const initialState = {};
const reducer = (state, action) => {
    switch (action.type) {
        case 'user':
            localStorage.setItem("product", JSON.stringify(action.value));
            return action.value;

        case 'reset':
            return initialState;
        case 'filter': {
            const value = action.selectedOption.value;
            if (value === "") {
                return blogList;
            }
            else {
                const updatedPosts = blogList.filter(post => post.category.indexOf(value) >= 0);
                return updatedPosts;
            }
        }
        case 'sort': {
            const value = action.selectedOption.value;
            const posts = [...state];
            if (value === "lowest") {
                return _.orderBy(posts, ["views"], ["asc"]);

            } else {
                return _.orderBy(posts, ["views"], ["desc"]);
            }
        }
        case 'search': {
            const value = action.event.target.value;
            if (value === "") {
                return blogList;
            }
            else {
                const filteredProducts = state.filter(post => post.title.toLowerCase().includes(value.toLowerCase()));
                return filteredProducts;
            }
        }
        default:
            return state;
    }
}
const UserProvider = ({ children }) => {
    const [posts, dispatch] = useReducer(reducer, blogList);

    return (

        <UserContext.Provider value={posts}>
            <UserContextDispatcher.Provider value={dispatch}>
                {children}
            </UserContextDispatcher.Provider>
        </UserContext.Provider>


    );
}

export default UserProvider;


export const useProduct = () => useContext(UserContext);
export const useProductACtions = () => {
    return useContext(UserContextDispatcher)
}