import React, { useState } from 'react'
import { fetchTransactions } from '../api/fetchTransactions'


const Transaction = () => {
    const [transactions, setTransactions] =  useState([])
    const [highlight, setHighlight] = useState(false)
    
    const getTransaction = async () => {
        try {
            const transaction = await fetchTransactions('https://example.com/api/transactions')
            console.log(transaction)
            setTransactions(transaction.data.transactions)
        } catch (error) {
            console.log(error)
        }
    }

    const highlightTransactin = () => {
        setHighlight(prev => !prev)
    }
  
    return (
    <div className='box'>
        <h1>transactions</h1>
        <button onClick={getTransaction}>fetch transactions</button>
        <button onClick={highlightTransactin}>highlight transactions greater than 1000</button>
        <ul>
            {
                transactions.map(({id, amount, date, gateway}) => {
                    return <li style={{color : highlight && amount > 1000 && 'yellow'}} key={id}>Amount : {amount} Date : {date} Gateway : {gateway}</li>
                })
            }
        </ul>

    </div>
  )
}

export default Transaction