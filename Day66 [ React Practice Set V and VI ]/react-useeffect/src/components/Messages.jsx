import React from 'react'

const Messages = ({message}) => {
  return (
    <div>
        { message.map(({from, message}) => {
                                return <p><b>{from}</b> : {message}</p>
                            })}
    </div>
  )
}

export default Messages