import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Course = () => {
    const {courseID} = useParams();
    const navigate = useNavigate();

    return (
    <div>
        <h1>course here</h1>
        <h3>url params here : {courseID}</h3>
        <button onClick={() => {
            navigate('/checkout', {state : 655})
        }}>checkout</button>
    </div>
  )
}

export default Course