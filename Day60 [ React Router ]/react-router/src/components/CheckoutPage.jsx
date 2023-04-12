import React from 'react'
import { useLocation } from 'react-router-dom'

const CheckoutPage = () => {
    const location = useLocation()
  return (
    <div>
        <h1>checkout page</h1>
        <h3>price: ${location.state}</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos illo recusandae laudantium vero perspiciatis nulla cum iure obcaecati aperiam nisi deserunt suscipit iusto eligendi et inventore, id adipisci non perferendis.</p>
    </div>
  )
}

export default CheckoutPage