import { useContext} from "react";

import { Link } from 'react-router-dom';
import { ForumContext } from "../forumContext";

const Questions = () => {
   const {questions} = useContext(ForumContext)
  
    return (
    <div>
        <h2>questions</h2>
        <ul>
            {
                questions.map((question) => {
                    return <li key={question.id}>
                        <h2>{question.question}</h2>
                        <Link>upvote</Link> {' '}{' | '}
                        <Link>downvote</Link> {' '}{' | '}
                        <Link to={`/questions/answer/${question.id}`}>answer</Link> {' '}
                    </li>
                })
            }
        </ul>
    </div>
  )
}

export default Questions