import React, { useEffect, useState } from 'react';
import { fetchComments } from '../database/comments';

const Comments = () => {
    const [userComments, setUserComments] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const loadComments = async () => {
        try {
            setIsLoading(true)
            const comments = await fetchComments('https://example.com/api/comments');
            console.log(comments.data.comments);
            setUserComments(comments.data.comments)
        } catch (error) {
            console.log(error.message)
        }finally{
            setIsLoading(false)
        }
    }

    useEffect(() => {
        loadComments()
    }, [])

    const filterComments = (e) => {
        const filteredCommenst = userComments.filter(({text}) => text !== e.target.value);
        setUserComments(filteredCommenst)
    }

  return (
    <div className='box'>
        <h1>users comments</h1>
        {isLoading && 'comments loading! please wait...'}
        <div>
            {
                userComments.map(({name, text}) => {
                    return (
                        <div style={{display : 'flex', justifyContent : 'left', alignItems : 'center', gap: '12px'}}>
                            <p><b>{name}</b> : {text}</p>
                            <button onClick={filterComments} value={text}>delete</button>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Comments