import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';



const CartProduct = ({product}) => {
  const {cartProducts, onRemoveButtonClick,increaseProductQunatity, decreaseProductQunatity} = useContext(CartContext);


  let counts = cartProducts.reduce((quantitites, item) => {
    if(quantitites[item.id]){
        quantitites[item.id].count+=1;
    }else{
        quantitites[item.id] = {count  : 1 }
    }
    return quantitites 
    
}, {});

console.log(counts)




// console.log('INCREASE BTN : ', cartProducts)  


  return (
    <li key={product.id} className=' products__product--cart'>
    <div className='cart__item'>
      <img className='cart__image' src={product.image} alt={product.title} />
     
    </div>

    <div className='basic__info'>
      <h2 className='cart__title'>{product.title}</h2>
      
      <div className='products__basicinfo'>
      <p className='info'>&#8377;{product.price} x {counts[product.id].count}</p>
        {/* <p>{product?.rating?.rate}</p> */}
        <p className='info'>{product.category}</p>
      </div>
      
      
      <div className='products__basicinfo'>

      <button className='cart__btn' onClick={() => increaseProductQunatity(product)}> + </button>
        <h2>{counts[product.id].count}</h2>

        {counts[product.id].count > 1 ? <button className='cart__btn' onClick={() => decreaseProductQunatity(product)}> - </button> :  <button className='cart__btn' onClick={() => onRemoveButtonClick(product)}><i class="fa-solid fa-trash"></i></button>}
        

        
        
        <p className='price'>&#8377;{(product.price * counts[product.id].count).toFixed(2)}</p>
      
        <button className='remove__btn' onClick={() => onRemoveButtonClick(product)}>remove</button>
      </div>
            
    
    </div>

</li>
  )
}

export default CartProduct