import { Fragment, useState } from "react";

import { AiOutlineSearch } from "react-icons/ai";
import { useProductACtions } from '../contexts/UserContext';

const Search = ({ placeholder,filter }) => {
    const [value, setValue] = useState("");
    const dispatch = useProductACtions();
    const changeHandler = (e) => {

        // dispatch({type:"filter",selectedOption:filter});
        dispatch({ type: "search", event: e })
        setValue(e.target.value);
    }
    return (
        <Fragment>
            <form className="text-center mt-[22px] relative">
                <div>
                    <input onChange={changeHandler} value={value} type="text" placeholder={placeholder} className="text-right text-[12px] pl-[16px] pr-[49px] py-[17px] border-[1px] border-[#D6D6D6] rounded-[13px] h-[58px] w-full" />
                    <AiOutlineSearch className="absolute right-[23px] top-[17px] w-[24px]  h-[24px] "/>
                </div>
            </form>
        </Fragment>
    );
}

export default Search;
