import axios from 'axios';
import '../style/Style.css';
import React, { useState } from 'react';

const ProductForm = () => {
    
    const [title, setTitle] = useState(""); 
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    
    const onSubmitHandler = e => {
        
        e.preventDefault();

        axios.post('http://localhost:8000/api/products/new', {
            title,
            price,
            description
        })
        .then(res=>{
            console.log(res);
            window.location.reload(false);
        })
        .catch(err=>console.log(err));
        
        setTitle("");
        setPrice("");
        setDescription("");
    }
    
    return (
        <div className='margen-top'>
            <h1>Product Manager</h1>
            <form onSubmit={onSubmitHandler}>
                <div className='fondo-gris'>
                    <label>Title</label>
                    <input type="text" onChange = {(e)=>setTitle(e.target.value)} value={title}/>
                </div>
                <div className='fondo-gris'>
                    <label>Price</label>
                    <input type="text" onChange = {(e)=>setPrice(e.target.value)} value={price}/>
                </div>
                <div className='fondo-gris'>
                    <label>Description</label>
                    <input type="text" onChange = {(e)=>setDescription(e.target.value)} value={description}/>
                </div>
                <input type="submit" className='btn btn-primary' value='Create'/>
            </form>
        </div>
    )
}

export default ProductForm;