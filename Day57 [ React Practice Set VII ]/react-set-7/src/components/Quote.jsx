import React, { useEffect, useState } from 'react';
import { fetchQuote } from '../DB/quote';

const Quote = () => {
    const [quote, setQuote] = useState({});
    const [isLoading, setIsLoading] = useState(false)
    const getQuote = async () => {
        try {
            setIsLoading(true)
            const newQuote = await fetchQuote();
            setQuote(newQuote)    
        } catch (error) {
            console.log(error)
        }finally{
            setIsLoading(false)

        }
    }

    
    useEffect(() => {
        getQuote();
    }, [])
    
    const getNewQuote = async () => {
        await getQuote()
    }

    

    const {content, author} = quote;

    return (
    <div className='box'>
        <h1>quote</h1>
        {isLoading ? <h2>loading...</h2> : (
            <>
            <h4>{content}</h4>
            <h2>{author}</h2>
            </>
        )}
        <button onClick={getNewQuote}>new quote</button>
    </div>
  )
}

export default Quote