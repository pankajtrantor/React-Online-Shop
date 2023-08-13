import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import {useParams} from 'react-router-dom';
import { useSelector, useDispatch} from 'react-redux';


export const ProductDetails = () =>{
    const {id} = useParams()
    const [product, setProduct] = useState([]);
    const [itemImg, setImage] = useState("");
	const [cartProd, setCartProduct] = useState([]);

	const ADD_TO_CART = 'ADD_TO_CART';
	const updateCartProducts = (product) => (
			 {type: ADD_TO_CART, payload: { id: product.id,title: product.title,image:product.thumbnail,price:product.price,discount:product.discountPercentage,quantity:1,totalPrice:(product.price - (product.price * product.discountPercentage / 100).toFixed()) }}
			
			//{type: ADD_TO_CART, payload: product}
		);

    const getProductDatails = async () => {
        const responsePromise = await fetch(`https://dummyjson.com/products/${id}`);
        const response = await responsePromise.json();

       console.log(response);
       setProduct(response);
       setImage(response.images[0]);
    }

    useEffect(()=>{
        getProductDatails();
    },[id]);
    const myVal = useSelector((state)=>state.MyCart);
    const dispatch = useDispatch();
 
    return(
        <>
        <div className="container">
		<div className="card">
			<div className="container-fliud">
				<div className="wrapper row">
					<div className="preview col-md-6">

                    <div class="preview-pic tab-content">
						  <div class="tab-pane active" id="pic-1"><img src={itemImg} /></div>

						</div>


					</div>
					<div className="details col-md-6">
						<h3 className="product-title">{product.title}</h3>
						<div className="rating">
							{/* <div className="stars">
								<span className="fa fa-star checked"></span>
								<span className="fa fa-star checked"></span>
								<span className="fa fa-star checked"></span>
								<span className="fa fa-star"></span>
								<span className="fa fa-star"></span>
							</div> */}
							<span className="review-no">Rating {product.rating}/5</span>
						</div>
						<p className="product-description">{product.description}</p>
						<p className="vote"><strong>MRP: </strong>Rs {product.price}/-</p>
                        <p className="vote"><strong>Discount: </strong> {product.discountPercentage} %</p>
						<h4 className="price">After Discount: <span>Rs {product.price - (product.price * product.discountPercentage / 100).toFixed()}/-</span></h4>
						<p className="vote"><strong>{product.stock}</strong> items are in stock!</p>
						{/* <h5 className="sizes">sizes:
							<span className="size" data-toggle="tooltip" title="small">s</span>
							<span className="size" data-toggle="tooltip" title="medium">m</span>
							<span className="size" data-toggle="tooltip" title="large">l</span>
							<span className="size" data-toggle="tooltip" title="xtra large">xl</span>
						</h5> */}
						{/* <h5 className="colors">colors:
							<span className="color orange not-available" data-toggle="tooltip" title="Not In store"></span>
							<span className="color green"></span>
							<span className="color blue"></span>
						</h5> */}
						<div className="action">
						<button className="add-to-cart btn btn-default" type="button" onClick={()=>dispatch(updateCartProducts(product))}>Add to cart</button>
							
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
        </>
    )
}