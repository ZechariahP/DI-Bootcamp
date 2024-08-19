import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Product = (props) => {
    const params = useParams();
    console.log(params);

    const navigate = useNavigate();

    const toPhone = () => {
        navigate("/phone");
    };

    return (
        <>
            <h2>Product number {params.id}</h2>
            <Link to="/shop"> Back to Shop </Link>
            <div>
                <button onClick={() => toPhone()}>Go to Phone</button>
            </div>
        </>
    );
};

export default Product;