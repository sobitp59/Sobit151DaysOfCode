import React, { useContext } from 'react';
import FoodItem from '../components/FoodItem';
import { FoodContext } from '../contexts/FoodContext';

const Menu = () => {
  const {foodItems, searchTerm, searchFoodItems, menuVeg, menuSpicy, isVeg, isSpicy, sortLowToHigh, sortHighToLow, isSortL2H, isSortH2L} = useContext(FoodContext);
  
  
  const getFoods = [...foodItems].filter((item) => {
    const searched = item.name.toLowerCase().includes(searchTerm.toLowerCase()) && (isVeg ? item.is_vegetarian : true) && (isSpicy ? item.is_spicy : true);
    return searched ;
  });

  const data = isSortH2L || isSortL2H ? [...getFoods].sort((a, b) => isSortH2L ? b.price - a.price : a.price - b.price) : [...getFoods];


  return (
    <div>
      <div>
        <h1>menu</h1>
      </div>
      <div>
        <input type="search" placeholder='search items' onChange={(e) => searchFoodItems(e)}/>
        
        <label htmlFor="veg">
          veg
          <input type="checkbox" name="veg" onChange={(e) =>menuVeg(e)}/>
        </label>
        <label htmlFor="spicy">
          spicy
          <input type="checkbox" name="spicy" onChange={(e) =>menuSpicy(e) } />
        </label>
        <label htmlFor="sort__price">
          sort(price) low to high
          <input type="radio" name="sort__price" onChange={sortLowToHigh}/>
        </label>
        <label htmlFor="sort__price">
          sort(price) high to low
          <input type="radio" name="sort__price" onChange={sortHighToLow}/>
        </label>
     
      </div>

      <ul className='menu'>
        { 
          data.map((item) => <FoodItem key={item.id} item={item}/> )
        }
      </ul>
    </div>
  )
}

export default Menu