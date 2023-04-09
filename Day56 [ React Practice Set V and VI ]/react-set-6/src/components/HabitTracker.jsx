import React, { useEffect, useState } from 'react'
import fetchHabit from '../database/habittracker'

const HabitTracker = () => {
    const [habits, setHabits] = useState([])
    
    const loadHabits = async () => {
        const reponse = await fetchHabit('https://example.com/api/habits')
        console.log(reponse.data.habits);
        setHabits(reponse.data.habits)
    } 

    useEffect(() => {
        loadHabits()
    }, [])
    
    return (
    <div className='box'>
        <h1>my habit tracker</h1>
        <div>
            {
                habits.map(({title, desc, daysFollowed, daysSkipped}) => {
                    return( 
                        <>
                            <h2>{title}</h2>
                            <p>{desc}</p>
                            <p>days followed : {daysFollowed}</p>
                            <p>days skipped : {daysSkipped}</p>
                            <hr />
                        </>
                    )
                })
            }
        </div>
    </div>
  )
}

export default HabitTracker