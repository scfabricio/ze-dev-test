import React from "react";

import { IProductCardProps } from "./ProductCard.types";

import "./ProductCard.scss";

const ProductCard = ({ price, oldPrice, urlImg, title }: IProductCardProps) => {
    return (
        <div className="product-card">
            <img className="product-card__img" src={urlImg} alt={title} />
            <div>
                <div className="title">
                    <h2 className="text">{title}</h2>
                </div>
                <div className="prices">
                    {oldPrice && <h2 className="text old-price">{oldPrice}</h2>}
                    <h1 className="text current-price">{price}</h1>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
