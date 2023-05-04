import { useProducts } from "../userreducer_usecontext/ProductContext"

const Cart = () => {
    const {state, removeFromCart} = useProducts()

    if(state.loading){
        return <h1>loading....</h1>
    }
    
    console.log(state.cart)
  return (
    <div>
        <h1>cart / items</h1>
        {state.cart.length === 0 ? (
            <h1>cart is empty</h1>
        ): (
        <h2>total price : {state.cart.reduce((total, {price})  => total + price , 0)}</h2>
        )}
        <ul>
        {state?.cart?.map((product) => (
            <li style={{border : '2px solid', margin  : '10px'}} key={product.id}>
                <img style={{width : '100px'}} src={product.image} alt="" />
                <p>{product.title}</p>
                <p>Rupees: {product.price}</p>
                <button onClick={() => removeFromCart(product.id)}>remove from cart</button>
            </li>
        ))}
        </ul>
    </div>
  )
}

export default Cart

