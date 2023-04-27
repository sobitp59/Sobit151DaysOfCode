import { useReducer } from "react";
import AddWish from "../components/AddWish";
import WishLists from "../components/WishLists";


let nextId = 3;
const initialWishes = [
  { id: 0, wish: 'Visit Kafka Museum', done: true },
  { id: 1, wish: 'Watch a puppet show', done: false },
  { id: 2, wish: 'Lennon Wall pic', done: false }
];

const wishReducer = (wishes, action) => {
    switch(action.type){
        case 'WISH_ADD':{
            return [...wishes, { 
                id : action.id,
                wish : action.wish,
                done : false,
            }]
        }
        case 'WISH_EDIT':{
            return wishes.map((wish) => {
                    if(wish.id === action.wish.id){
                        return action.wish
                    }else{
                        return wish
                    }
                })
            
        }
        case 'WISH_DELETE':{
            return [...wishes].filter(({id}) => id !== action.id)
        }
        default : {
            throw Error('Unknown Action : ', action.type)
        }
    }
}

const TododApp = () => {
    const [wishes, dispatch] = useReducer(wishReducer, initialWishes)

    
    const onAddWish = (wish) => {
        dispatch({
            type : 'WISH_ADD',
            id : nextId++,
            wish : wish
        })
    }

    const onEditWish = (wish) => {
        dispatch({
            type : 'WISH_EDIT',
            wish : wish
        })
    }

    const onDeleteWish = (wishID) => {
        dispatch({
            type : 'WISH_DELETE',   
            id : wishID
        })
    }

    return(
        <div className="todoapp__main">
            <h1>my wishing app!</h1>
            
            <AddWish onAddWish={onAddWish}/>


            {/* todolists */}
            <WishLists 
                wishes={wishes} 
                onEditWish={onEditWish}
                onDeleteWish={onDeleteWish}
            />
        </div>
    )
}

export default TododApp;

