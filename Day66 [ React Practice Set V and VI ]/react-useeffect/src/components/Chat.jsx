import React, { useEffect, useState } from 'react'
import { fetchChat } from '../database/chat'
import ChatData from './ChatData'

const Chat = () => {
    const [chat, setChat] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const loadChats = async () => {
        try {
            setIsLoading(true)
            const chats = await fetchChat('https://example.com/api/userchat');
            console.log();
            if(chats.status === 200){
                setChat(chats.data);
                setError(null)
            }
        } catch (error) {
            console.log(error)
            setError(error.message)
            setIsLoading(false)
        }finally{
            setIsLoading(false)
        }
    }

    useEffect(() => {
        loadChats()
    }, [])
  
    return (
    <div className='box'>
        <h1>chatting-watting</h1>
        <div>
            {error && <b>{error}</b> }
            {isLoading && 'chats loading...'}
            <ChatData chat={chat}/>
        </div>
    </div>
  )
}

export default Chat