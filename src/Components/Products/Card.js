import React from "react";
import './Card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faRetweet, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slice/cartSlice";

function Card(props){

    const dispatch = useDispatch()

    const handleAddToCart = () => {
        console.log("Adding to cart:", props);
        dispatch(addToCart({
            ...props,
            quantity: 1
        }));
        // alert("Successfully added to cart!");
    }    

    return (
        <div className='card'>
            <div className='top'>
                <img src={props.img} alt={props.name} />
                    <ul className="hovered">
                        <li><FontAwesomeIcon icon={faHeart} /></li>
                        <li><FontAwesomeIcon icon={faRetweet} /></li>
                        <li onClick={handleAddToCart}><FontAwesomeIcon icon={faShoppingCart} /></li>
                    </ul>
            </div>
            <div className='bottom'>
                <p>{props.name}</p>
                <h4>${props.price}</h4>
            </div>
        </div>
    )
}

export default Card;