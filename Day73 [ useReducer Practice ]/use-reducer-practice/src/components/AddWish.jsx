import { useState } from "react";

const AddWish = ({onAddWish}) => {
    const [wish, setWish] = useState('')
    const handleWish = (e) => {
        setWish(e.target.value)
    }

    return (
    <div className="tododapp__input">
        <input onChange={(e) => handleWish(e)} value={wish} type="text" placeholder="enter your wish 🧙‍♂️"/>
        <button onClick={() => {
            if(wish.length > 0){
                onAddWish(wish)
                setWish('')
            }
        }}>add wish</button>
    </div>
  )
}

export default AddWish