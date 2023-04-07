import React, { useEffect, useState } from 'react';
import fetchHabitData from '../database/habit';

const Habit = () => {
    const [habits, setHabits] = useState([]);
    const [showArchived, setShowArchived] = useState(false)

    const loadHabits = async () => {
        const response = await fetchHabitData('https://example.com/api/habits');
        setHabits(response.data.habits);
    }

    useEffect(() => {
        loadHabits()
    }, [])


    const toggleArchive = () => {
        setShowArchived(prevstate => !prevstate)
    }

    const filteredHabits = habits.filter(({archived}) => archived === showArchived)
    console.log(filteredHabits);



  return (
    <div className='box'>
        <h1>{showArchived ? 'Archived' : 'Unarchived'}</h1>
        <div>
            {
                filteredHabits.map(({title, desc, daysFollowed, daysSkipped}) => {
                    return(
                        <>
                            <h2>{title}</h2>
                            <p>{desc}</p>
                            <p><b>days followed</b> : {daysFollowed}</p>
                            <p><b>days skipped</b> : {daysSkipped}</p>
                        </>
                    )
                })
            }
        </div>
        <button onClick={toggleArchive}>{showArchived ? 'show unarchived' : 'show archived'}</button>
    </div>
  )
}

export default Habit