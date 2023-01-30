import axios from 'axios';
import React from 'react';
import { Link } from "react-router-dom";

const ProductList = (props) => {

    const { removeFromDom } = props;
    
    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/products/delete/' + productId)
            .then(res => {
                removeFromDom(productId);
            })
    }

    return (
        <div className='center'>
            <h1>All Products:</h1>
            <ul>
                {props.product.map((p, idx)=>{
                    return (
                            <li key={idx}>
                                <Link className="space" to={"/"+ p._id }>{p.title}</Link>
                                <Link className="space btn btn-primary" to={"/"+ p._id +"/update"}>Edit</Link>
                                <button className="btn btn-danger" onClick={(e)=>{deleteProduct(p._id)}}>Delete</button>
                            </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default ProductList;