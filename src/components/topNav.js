import React from "react";
import { useSelector, useDispatch} from 'react-redux';
import { Link, Navigate, useNavigate  } from 'react-router-dom';
export const TopNav = () =>{
    const LOGOUT_USER = 'LOGOUT_USER';
     const {cartItemsCount} = useSelector((state)=>state?.shopCartItems);
    const dispatch=useDispatch();
      const logoutUser = () => (
         {type: LOGOUT_USER}
        
     )
    
    return(<>
                <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="/">Shop Online</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/about">About</a>
                </li>
               
                <li className="nav-item">
                <a className="nav-link" href="/contact">Contact</a>
                </li>
               
            </ul>
            <div className="d-flex" role="search">              
             
               <a href="/cart">
               <button className="btn btn-outline-success mx-3" type="submit" style={{color:"#fff"}}>My Cart {cartItemsCount}</button>
               </a>
               <a href="/" onClick={()=>{
                dispatch( logoutUser())
                          }            
            }>
                <button className="btn btn-outline-success mx-3" style={{color:"#fff"}}>Log Out</button>
            </a>
              
              
            </div>
            </div>
        </div>
        </nav>
    </>)
}