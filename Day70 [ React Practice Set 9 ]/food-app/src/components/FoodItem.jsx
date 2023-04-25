import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FoodContext } from "../contexts/FoodContext";

const FoodItem = ({item}) => {
    const {addToCartItem, cartItems} = useContext(FoodContext);
    const navigate = useNavigate()

    const gotoCart = () => {
        navigate('/cart')
    }

    
    return (
        <li className="food__card">
            <img className="food__image" src={item.image} alt={item.name} />
            <h2>{item.name} {item.is_vegetarian && item.is_spicy ? <span> <span>vegtarian</span> <span>spicy</span> </span> : item.is_vegetarian ? <span>vegetarian</span> : item.is_spicy && <span>spicy</span> }</h2>
            <p>{item.description}</p>
            <p>price : ${item.price}</p>
            <p>delivery time : {item.delivery_time}min</p>
            {!cartItems.find(cartItem => cartItem.id === item.id) ? <button onClick={() => addToCartItem(item.id)}>add to cart</button> : <button onClick={gotoCart}>go to cart</button>}
        </li>
  )
}

export default FoodItem
// item.is_vegetarian ? 'vegetarian' : item.is_spicy ? 'spicy' : item.is_vegetarian && item.is_spicy && 'veg and apicy'