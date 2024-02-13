import React, { useState } from 'react';
import { Container } from "./style";
import { Button } from "../Button";
import addition from "../../assets/icons/addition.svg";
import subtraction from "../../assets/icons/subtraction.svg";
import heart from "../../assets/icons/heart.svg"

export function CardFood({ image, title, description, price }) {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = (e) => {
    e.preventDefault();
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decreaseQuantity = (e) => {
    e.preventDefault();
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  return (
    <Container>
        <div className='favorite'> <img className='heartIcon'  id='heartIcon' src={heart} alt="" /></div>
       
      <img className='image' src={image} alt="" />      
      <h2>{title}</h2>
      <p>{description}</p>
      <span className="price">{price}</span>
      <div>
        <a href="#" onClick={decreaseQuantity}><img src={subtraction} alt="" /></a>
        <span>{String(quantity).padStart(2, '0')}</span>
        <a href="#" onClick={increaseQuantity}><img src={addition} alt="" /></a>
        <Button title="incluir" />
      </div>
    </Container>
  );
}
