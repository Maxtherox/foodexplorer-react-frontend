import React, { useState } from 'react';
import { Container } from "./style";
import { Button } from "../Button";
import addition from "../../assets/icons/addition.svg";
import subtraction from "../../assets/icons/subtraction.svg";
import heart from "../../assets/icons/heart.svg"
import edit from "../../assets/icons/edit.svg"
import { Link } from "react-router-dom";
import { USER_ROLE } from "../../utils/roles";
import { useAuth } from '../../hooks/auth';
import imagePlaceholder from '../../assets/icons/placeholder/png-transparent-fast-food-eating-maps-location-placeholder-pin-icon.png';
import { api } from '../../services/api';

export function CardFood({ data, ...rest }) {
  const {user} = useAuth();

  const imageURL = data.avatar ? `${api.defaults.baseURL}/files/${data.avatar}` : imagePlaceholder;

  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = (e) => {
    e.preventDefault();
    if (quantity > 9) {
      alert("Erro: A quantidade máxima é de 10 unidades")
      return;
    }
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decreaseQuantity = (e) => {
    e.preventDefault();
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  return (
    <Container {...rest}>
      {user.role === USER_ROLE.CUSTOMER &&
        <div className='favorite'> <img className='heartIcon'  id='heartIcon' src={heart} alt="" /></div>
       }
      {user.role === USER_ROLE.ADMIN &&
       <Link to={`/edit/${data.id}`}>
        <div className='favorite'> <img  id='heartIcon' src={edit} alt="icone de edição" /></div>
        </Link>
       }
      <img className='image' src={imageURL} alt="imagem do prato" />    
      <Link to={`/details/${data.id}`}>
      <h2>{data.name}</h2>
      </Link>      
      <p>{data.description}</p>
      <span className="price">R$ {data.price.toLocaleString('PT')}</span>

      {user.role === USER_ROLE.CUSTOMER &&
        <div>
        <a href="#" onClick={decreaseQuantity}><img src={subtraction} alt="" /></a>
        <span>{String(quantity).padStart(2, '0')}</span>
        <a href="#" onClick={increaseQuantity}><img src={addition} alt="" /></a>
        <Button title="incluir" />
      </div>
      }
    </Container>
  );
}
