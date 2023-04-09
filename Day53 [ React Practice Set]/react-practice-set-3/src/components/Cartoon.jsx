import React from 'react'

const Cartoon = ({cartoons, superPower}) => {
  return (
    <div className='box'>
        <h1>cartoons</h1>
        <p>magnitude greater than 5</p>
        <ul>
            {
                cartoons.filter(({magnitude}) => magnitude > 5)
                .map(({id, name, superpower, magnitude}) => <li key={id}>{name} {superpower} {magnitude}</li> )
            }
        </ul>
        
        <p>magnitude is even</p>
        <ul>
            {
                cartoons.filter(({magnitude}) => !(magnitude%2))
                .map(({id, name, superpower, magnitude}) => <li key={id}>{name} {superpower} {magnitude}</li> )
            }
        </ul>

        <p>superpower : intelligence</p>
        <ul>
            {
                cartoons.filter(({superpower}) => superpower === superPower)
                .map(({id, name, superpower, magnitude}) => <li key={id}>{name} {superpower} {magnitude}</li> )
            }
        </ul>

    </div>
  )
}

export default Cartoon