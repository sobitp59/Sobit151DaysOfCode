import { createContext, useEffect, useState } from 'react';
import { fetchFoodItems } from '../api/foodAPI';

const FoodContext = createContext();

const FoodContextProvider = ({children}) => {
    const [foodItems, setFoodItems] = useState([])
    const [cartItems, setCartItems] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const [isVeg, setIsVeg] = useState(false)
    const [isSpicy, setIsSpicy] = useState(false)
    const [isSortL2H, setIsSortL2H] = useState(false)
    const [isSortH2L,setIsSortH2L] = useState(false)
    
    const getAllFoodItems = async() => {
        const response = await fetchFoodItems('https://example.com/api/menu')
        console.log(response.data);
        setFoodItems(response.data.menu)
    }

    const addToCartItem = (id) => {
        const getItem = foodItems.find(item => item.id === id);
        const item = {...getItem, quantity : 1}
        console.log(item)
        setCartItems(prev => [...prev, item])
    }

    const increaseCount = (id) => {
        const updatedCartItems = cartItems.map((item) => {
            if(item.id === id){
                return {...item, quantity : item.quantity+=1}
            }
            return item
        })
        setCartItems(updatedCartItems)
    }
    
    const decreaseCount = (id) => {
        const updatedCartItems = cartItems.map((item) => {
            if(item.id === id){
                return {...item, quantity : item.quantity > 1 ?  (item.quantity -= 1) : 1}
            }
            return item
        })
        setCartItems(updatedCartItems)
    }

    const searchFoodItems = (e) => {
        setSearchTerm(e.target.value);
    }

    const menuVeg = (e) => {
        console.log('veg', e.target.checked)
        setIsVeg(e.target.checked)
    }
    
    const menuSpicy = (e) => {
        console.log('spicy', e.target.checked)
        setIsSpicy(e.target.checked)
    }

    const sortLowToHigh = () => {
        setIsSortL2H(true)
        setIsSortH2L(false)
    }
    const sortHighToLow = () => {
        setIsSortH2L(true)
        setIsSortL2H(false)
    }

    const handleDeleteCart = (id) => {
        const getItems = [...cartItems].filter((item) => item.id !== id);
        setCartItems(getItems)
        console.log(id)
    }

    useEffect(() => {
        getAllFoodItems()
    }, [])

    return(
        <FoodContext.Provider value={{foodItems, addToCartItem, cartItems, increaseCount, decreaseCount,searchFoodItems, searchTerm, menuVeg, menuSpicy, isVeg, isSpicy, sortLowToHigh, sortHighToLow, isSortL2H, isSortH2L, handleDeleteCart}}>
            {children}
        </FoodContext.Provider>
    )
}

export { FoodContext, FoodContextProvider };

