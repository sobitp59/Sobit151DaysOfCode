import { useProducts } from "../store/ProductContext"

const Home = () => {
    const {data} = useProducts()
    console.log(data)
  return (
    <div>Home :</div>
  )
}

export default Home