import React from "react";
import { Link } from "react-router-dom";

const Shop = (props) => {
    return (
        <>
        <h2>My Shop</h2>
        <div>
            <h3>Product 1</h3>
            <p>Price: $100</p>
            <Link to="/product/1"> Buy Now </Link>   
        </div>
        <div>
            <h3>Product 2</h3>
            <p>Price: $200</p>
            <Link to="/product/2"> Buy Now </Link>
        </div>
        </>
    );
};

export default Shop;
