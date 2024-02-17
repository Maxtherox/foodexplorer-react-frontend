import { Container } from "./styles";

import React, { useState } from 'react';
import addition from "../../assets/icons/addition.svg";
import subtraction from "../../assets/icons/subtraction.svg";

export function Increaser(){
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
    return(
        <Container>
            <a href="#" onClick={decreaseQuantity}><img src={subtraction} alt="" /></a>
            <span>{String(quantity).padStart(2, '0')}</span>
            <a href="#" onClick={increaseQuantity}><img src={addition} alt="" /></a>
        </Container>
    )
}