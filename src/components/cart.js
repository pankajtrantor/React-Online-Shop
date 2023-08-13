import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import { Link } from 'react-router-dom';
export const Cart = () =>{
    const {cartItems,grandTotalPrice} = useSelector(state => state?.shopCartItems);
    const dispatch = useDispatch();
    const DELETE_CART_PRODUCT = 'DELETE_CART_PRODUCT';
    const DECREASE_PRODUCT_QUANTITY = 'DECREASE_PRODUCT_QUANTITY';
    const INCREASE_PRODUCT_QUANTITY = 'INCREASE_PRODUCT_QUANTITY';
	const DeleteCartProducts = (item) => (
			// {type: ADD_TO_CART, payload: [{ id: product.id,title: product.title,image:product.images,price:product.price,discount:product.discountPercentage }]}
			{type: DELETE_CART_PRODUCT, payload: item}
	);
    const DecreaseProductQuantity = (id) => (
        {type: DECREASE_PRODUCT_QUANTITY, payload: id}
    );
    const IncreaseProductQuantity = (id) => (
        {type: INCREASE_PRODUCT_QUANTITY, payload: id}
    );
    return(
        <>
         <div className="container mt-5 mb-5">
            <div className="d-flex justify-content-center row">
                <div className="col-md-8">
                    <div className="p-2">
                        <h4>Shopping cart</h4>
                        </div>
                        <div className='mx-2'>
                        <Link to="../home"><button className="btn btn-warning btn-block btn-mdm ml-2 pay-button" type="button">Continue Shopping</button></Link> 
                   </div>
                        {cartItems && cartItems.map((cartItem, index) => {
                return <>
                        <div className="d-flex flex-row justify-content-between align-items-center p-2 bg-white mt-4 px-3 rounded">
                        <div className="mr-1"><img className="rounded" src={cartItem.image} width="70"/></div>
                        <div className="d-flex flex-column align-items-center product-details"><span className="font-weight-bold">{cartItem.title}</span>
                            <div className="d-flex flex-row product-desc">
                                <div className="size mr-1"><span className="text-grey">Rating:</span><span className="font-weight-bold">&nbsp;{cartItem.rating}/5</span></div>
                                
                            </div>
                        </div>
                        <div className="d-flex flex-row align-items-center qty"><i className="fa fa-minus text-danger" style={{cursor:"pointer"}} onClick={() =>{dispatch(DecreaseProductQuantity(cartItem.id))}}></i>
                            <h5 className="text-grey mt-1 mr-1 ml-1">{cartItem.quantity}</h5><i className="fa fa-plus text-success" style={{cursor:"pointer"}} onClick={() =>{dispatch(IncreaseProductQuantity(cartItem.id))}}></i></div>
                        <div>
                            <h5 className="text-grey">Rs {cartItem.totalPrice.toFixed()}</h5>
                        </div>
                        <div className="d-flex align-items-center" style={{cursor:"pointer"}} onClick={() =>{dispatch(DeleteCartProducts(cartItem))}}><i className="fa fa-trash mb-1 text-danger"></i></div>
                    </div>
                </>
                })
                } 
                   <div className="d-flex flex-row align-items-center mt-3 p-2 bg-white rounded">
                   
                    <div>
                            <button className="btn btn-warning btn-block btn-mdm ml-2 pay-button" type="button">Proceed to Pay</button>
                    </div>
                    
                   <div style={{marginLeft:"330px"}}><b>Grand Total: Rs {grandTotalPrice>0?grandTotalPrice:0}/-</b></div>
                   </div>
                   
                </div>
            </div>
        </div>
        </>
    )
}