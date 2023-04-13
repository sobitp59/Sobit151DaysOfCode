import { faker } from '@faker-js/faker';
import { useContext, useState } from 'react';
import Product from './Product';
import { CartItems } from '../Context';


const productsDB = [...Array(20)].map(() => ({
    id : faker.datatype.uuid(),
    name :faker.commerce.product(),
    price : faker.commerce.price(),
    image : faker.image.imageUrl(), 
}))

const Home = ({}) => {
    const [products] = useState(productsDB)
    
  
    return (
    <div>
        <h1>home page</h1>
        <h2>buy awesome products</h2>
        <ul className='products'>
            {products.map((product) => <Product product={product} />)}
        </ul>
    </div>
  )
}

export default Home