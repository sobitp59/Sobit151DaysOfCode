import { createContext, useContext, useEffect, useReducer } from "react";

const ProductContext = createContext();

const initialState = {
    products : [],
    cart : [], 
    loading : true, 
    error : null
}


const reducer = (state, action) => {
    switch(action.type){
        case 'FETCH_PRODUCTS_REQUEST':
            return {...state, loading : true, error : null};
        
        case 'FETCH_PRODUCTS_SUCCESS':
            return {...state, loading : false, products : action.payload};
        
        case 'FETCH_PRODUCTS_FAILURE':
            return {...state, error : action.payload }
        
        case 'ADD_TO_CART':
            return {...state, cart : [...state.cart, action.payload] }
        
        case 'REMOVE_FROM_CART':
            return {...state, cart : action.payload }

        default: return state
    }
}

const ProductContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const fetchProducts = async () => {
        dispatch({type : 'FETCH_PRODUCTS_REQUEST'});
        try {
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();            
            dispatch({type : 'FETCH_PRODUCTS_SUCCESS', payload : data})
        } catch (error) {
            dispatch({type : 'FETCH_PRODUCTS_FAILURE', payload : error.message})
        }
    }

    const addToCart = (id) => {
        const product = [...state.products].find((product) => product.id === id )
        dispatch({type : 'ADD_TO_CART', payload : product})
    }
    
    const removeFromCart = (id) => {
        const updatedProducts = [...state.cart].filter((product) => product.id !== id )
        dispatch({type : 'REMOVE_FROM_CART', payload : updatedProducts})
    }


    useEffect(() => {
        fetchProducts()
    }, [])

    const value = {state, addToCart, removeFromCart}

    return(
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductContextProvider;

export const useProducts = () => {
    return useContext(ProductContext)
}