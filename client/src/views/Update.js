import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useHistory } from "react-router-dom";

const Update = (props) => {

    const histo = useHistory();

    const [producto, setProduct] = useState([]);

    const removeFromDom = (id) => {
        setProduct(producto.filter(producto => producto._id !== id));
    }
    
    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/products/delete/' + productId)
            .then(res => {
                removeFromDom(productId);
                histo.push("/")
            })
    }

    const [title, setTitle] = useState(""); 
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + props.match.params.id)
            .then(res => {
                setTitle(res.data.producto.title);
                setPrice(res.data.producto.price);
                setDescription(res.data.producto.description);
            })
    }, [props.match.params.id])

    const updateProduct = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/products/update/' + props.match.params.id, {
            title,
            price,
            description
        })
            .then(res => console.log(res));
    }
    return (
        <div className='margen-top'>
            <h1>Update a Product</h1>
            <form onSubmit={updateProduct}>
                <p className='fondo-gris'>
                    <label>Title</label>
                    <input type="text" 
                    name="title" 
                    value={title} 
                    onChange={(e) => { setTitle(e.target.value) }} />
                </p>
                <p className='fondo-gris'>
                    <label>Price</label>
                    <input type="text" 
                    name="price"
                    value={price} 
                    onChange={(e) => { setPrice(e.target.value) }} />
                </p>
                <p className='fondo-gris'>
                    <label>Description</label>
                    <input type="text" 
                    name="description"
                    value={description} 
                    onChange={(e) => { setDescription(e.target.value) }} />
                </p>
                <input type="submit" className='btn btn-primary' value='Update'/>
                <button className="space btn btn-danger" onClick={(e)=>{deleteProduct(props.match.params.id)}}>Delete</button>
                </form>
        </div>
    )
}

export default Update;