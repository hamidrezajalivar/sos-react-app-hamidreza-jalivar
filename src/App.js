import './App.css';

import { Route, Routes } from 'react-router-dom'

import Blog from './pages/Blog';
import Home from './pages/Home';
import MainLayout from './layout/MainLayout';
import NotFound from './components/NotFound'
import SingleArticle from './components/SingleArticle';
import TodoList from './components/TodoList';

function App() {



  return (
    <div className="page-wrapper">
    
    <MainLayout>
        <Routes>
 
       
            <Route  path='/todolist' element={<TodoList/>} />
            <Route  path='/blogs' element={<Blog/>} />
          <Route  path='/articles/article/:id' element={<SingleArticle/>} /> 
               <Route exact path='/' element={<Home/>} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    </MainLayout>
</div>
  );
}

export default App;
