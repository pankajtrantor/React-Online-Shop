import { useEffect, useState } from "react";
import * as PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Products = () =>{
    const [products,setProducts] = useState([]);
    const getProducts = async () =>{
        const responsePromise = await fetch('https://dummyjson.com/products');
        const response = await responsePromise.json();
        setProducts(response.products);
        console.log(products);
    }
    
    useEffect(() =>{
        getProducts();
        
        return () =>{
        }
    },[])

    return(
            <div className="container my-3">
                <div className="row">
                {                 
                    products.map((product) => 
                    
                            <div className="col-md-4" key={product.id}>
                                <div className="card" style={{width: "18rem;"}}>
                                <Link to={`/productdetails/${product.id}`}>
                                    <img className="card-img-top" src={product.images[0]} alt="Card image cap" />
                                </Link>
                               
                                <div className="card-body">
                                    <h5 className="card-title">{product.title}</h5>
                                    <p class="card-text">Discount {product.discountPercentage}%   Rating {product.rating}/5</p>
                                </div>
                                </div>
                            </div>      
                    )
                }
                </div>                    
            </div>   
    )
}