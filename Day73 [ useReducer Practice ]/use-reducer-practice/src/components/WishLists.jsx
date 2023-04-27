import { useState } from "react";

const WishLists = ({wishes, onEditWish, onDeleteWish}) => {
  return (
    <div className="todoapp__wishlists">
    { wishes.map((wish) => <Wish 
                                key={wish.id} 
                                wish={wish}  
                                onEdit={onEditWish} 
                                onDelete={onDeleteWish} 
                            /> 
    )}
    </div>
  )
}

const Wish = ({wish, onEdit, onDelete}) => {
    const [isEditing, setIsEditing] = useState(false);
    let wishContent;
    
    if(isEditing){
        wishContent = (
            <>
                <input 
                    type="text" 
                    value={wish.wish}
                    onChange={(e) => {
                        onEdit({
                            ...wish,
                            wish : e.target.value
                        })
                    }}
                />
                <button onClick={() => setIsEditing(false)}>save</button>
            </>
        )
    }else{
        wishContent = (
            <>
                {wish.wish}
                <button onClick={() => setIsEditing(true)}>edit</button>
            </>
        )
    }

    return (
        <label>
            <input type="checkbox" checked={wish.done} onChange={e => {
                onEdit({
                    ...wish,
                    done : e.target.checked
                })
            }}/>
            <span style={{textDecoration : wish.done && 'line-through'}}>{wishContent}</span>
            <button onClick={() => onDelete(wish.id)}>delete</button>
        </label>
    )
}


export default WishLists