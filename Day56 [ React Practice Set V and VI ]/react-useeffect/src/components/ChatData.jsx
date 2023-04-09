import React from 'react'
import Messages from './Messages'

const ChatData = ({chat}) => {
  return (
    <div>
        {
             chat.map(({name, messages}) => {
                return(
                    <>
                        <h2>{name}'s chat</h2>
                        <Messages message={messages}/>
                    </>
                )
            })
        }
    </div>
  )
}

export default ChatData