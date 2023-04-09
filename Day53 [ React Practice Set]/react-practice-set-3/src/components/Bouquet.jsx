import React from 'react';

const Bouquet = ({bouquet}) => {
  return (
    <div className='box'>
        <h1>bouquet</h1>
        <p>bouquet containing rose</p>
        {
            bouquet.map(({flowers, price}) => {
                return flowers.find(flower => (flower === 'rose')) && <h2>Price of bouquet with roses : {price}</h2>
            })
        }

        <p>bouquet having price over 2000</p>
        <ol>
        {
            bouquet.map(({flowers, price}) => {
                return price > 2000 && flowers.map((flower) => <li>{flower}</li> )
            })
        }
        </ol>
    </div>
  )
}

export default Bouquet