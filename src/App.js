import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import Movies from './Pages/Movies/Movies';
import About from './Pages/About us/About';
import Contact from './Pages/Contact/Contact';
import Fav from './Pages/Fav/Fav';
import Search from './Pages/Search/Search';
import Details from './Pages/details/Details';


let routwrs = createBrowserRouter([
{path:'/', element:<Layout/>,children:[
{index:true, element:<Home/>},
{path:'movies', element:<Movies/>},
{path:'movies/:movieId', element:<Details/>},
{path:'about', element:<About/>},
{path:'contact', element:<Contact/>},
{path:'fav', element:<Fav/>},
{path:'search', element:<Search/>},

]}
])



function App() {
 
  return (
    <div>
    <RouterProvider router={routwrs}/>
    </div>
  )

  
}

export default App;
