import React from "react";

const Cards = ({item}) => {
    const {id, title, author, price, img} = item;
    return (
        <div className="cards">
            <div className="image_box"></div>
            <img src={img} alt="" />
            <div className="details">
                <p>{title}</p>
                <p>{author}</p>
                <p>{price}</p>
                <button>Add to Cart</button>
            </div>
        </div>
    );
};

export default Cards;
