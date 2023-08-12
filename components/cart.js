import React from 'react';
import {useSelector, useDispatch} from "react-redux";
export const Cart = () =>{
    const cartItems = useSelector(state => state.cartitems);
    return(
        <>
         <div className="container mt-5 mb-5">
            <div className="d-flex justify-content-center row">
                <div className="col-md-8">
                    <div className="p-2">
                        <h4>Shopping cart</h4>
                        </div>
                        
                        {cartItems && cartItems.map((cartItem, index) => {
                return <>
                        <div className="d-flex flex-row justify-content-between align-items-center p-2 bg-white mt-4 px-3 rounded">
                        <div className="mr-1"><img className="rounded" src={cartItem.thumbnail} width="70"/></div>
                        <div className="d-flex flex-column align-items-center product-details"><span className="font-weight-bold">{cartItem.title}</span>
                            <div className="d-flex flex-row product-desc">
                                <div className="size mr-1"><span className="text-grey">Rating:</span><span className="font-weight-bold">&nbsp;{cartItem.rating}/5</span></div>
                                
                            </div>
                        </div>
                        <div className="d-flex flex-row align-items-center qty"><i className="fa fa-minus text-danger"></i>
                            <h5 className="text-grey mt-1 mr-1 ml-1">1</h5><i className="fa fa-plus text-success"></i></div>
                        <div>
                            <h5 className="text-grey">Rs {cartItem.price}</h5>
                        </div>
                        <div className="d-flex align-items-center"><i className="fa fa-trash mb-1 text-danger"></i></div>
                    </div>
                </>
                })
                } 
                   <div className="d-flex flex-row align-items-center mt-3 p-2 bg-white rounded"><button className="btn btn-warning btn-block btn-lg ml-2 pay-button" type="button">Proceed to Pay</button></div>
                </div>
            </div>
        </div>
        </>
    )
}