import React from 'react';

const Product = (props) => {
    return (
        <article className="product">
            <p>Produkt: <strong>{props.id}</strong></p>
        </article>
    );
}
export default Product;