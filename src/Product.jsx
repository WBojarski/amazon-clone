import React from "react";

import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, rating }) {
    const [{ basket }, dispatch] = useStateValue();
    console.log(basket);
    const addToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id,
                title,
                image,
                price,
                rating,
            },
        });
    };
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>
                        $ <strong>{price}</strong>
                    </small>
                </p>
                <div className="product__rating">
                    {Array(rating)
                        .fill()
                        .map(() => (
                            <img
                                src="data:image/png;base64,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"
                                alt=""
                            />
                        ))}
                </div>
            </div>
            <img className="product__image" src={image} alt="" />
            <button onClick={addToBasket}>Add to basket</button>
        </div>
    );
}

export default Product;
