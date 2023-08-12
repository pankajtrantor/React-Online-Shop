import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import {TopNav} from './components/topNav';
import { Home } from './components/home';
import { Products } from './components/products';
import { About } from './components/about';
import { Contact } from './components/contact';
import {ProductDetails} from './components/productdetails';
import { Cart } from './components/cart';

const router = createBrowserRouter([
  {
    "path":"/",
    element:<Home/>
  },
  {
    "path":"/home",
    element:<Home/>
  },
  {
    "path":"/products",
    element:<Home/>
  },
  {
    "path":"/about",
    element:<About/>
  },
  {
    "path":"/contact",
    element:<Contact/>
  },
  {
    "path":"/productdetails/:id",
    element:<ProductDetails/>
  },
  {
    "path":"/cart",
    element:<Cart/>
  }
])

function App() {
  return (<>
      <TopNav/>    
      
      <div className="container">
        <RouterProvider router={router}>
          
        </RouterProvider>  
      </div>
  </>    
  );
}

export default App;
