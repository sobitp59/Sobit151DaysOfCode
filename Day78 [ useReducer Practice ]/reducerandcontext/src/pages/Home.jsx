import { useProducts } from "../userreducer_usecontext/ProductContext"


const Home = () => {

    const {state, addToCart} = useProducts()
    console.log(state)

    if(state.loading){
        return <h1>loading....</h1>
    }

    if(state.error){
        return <h1>error : {state.error} </h1>
    }

    return (
    <div>

        <h1>home / products</h1>
        <ul>
            {state?.products?.map((product) => (
                <li style={{border : '2px solid', margin  : '10px'}} key={product.id}>
                    <img style={{width : '200px'}} src={product.image} alt="" />
                    <h3>{product.title}</h3>
                    <h3>Rupees: {product.price}</h3>
                    <button onClick={() => addToCart(product.id)}>add to cart</button>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Home