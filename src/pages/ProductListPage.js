import React from 'react';
import {Link } from 'react-router-dom';


const products = [
    "car",
    "bike",
    "motorcycle"
]

const ProductListPages = () => {

    const list = products.map(el => (
        <li key={el}>
            <Link to={`/product/${el}`}>{el}</Link>
        </li>
    ))

    return(
        <div className="products">
            <h2>Lista produktów</h2>
            <div>
                <ul>
                    {list}
                </ul>
            </div>
        </div>
    );
}

export default ProductListPages;