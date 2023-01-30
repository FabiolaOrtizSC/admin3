import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Detail = (props) => {
    
    const [product, setProduct] = useState({});
    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + props.match.params.id)
        .then(res => setProduct(res.data.producto))
        .catch(err => console.log(err))
    }, [props.match.params.id]);

    return (
        <div className='center-2'>
            <h3 className='margen'>{product.title}</h3>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
        </div>
    )
}

export default Detail;