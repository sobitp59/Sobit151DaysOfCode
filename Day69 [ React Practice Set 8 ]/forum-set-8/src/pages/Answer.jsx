
import { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ForumContext } from '../forumContext'


const Answer = () => {
    const {answerID} =  useParams()
    const {questions} = useContext(ForumContext);

    const findAnswer = questions.filter(question => question.id === Number(answerID));
    const [{answer}] = findAnswer;

  return (
    <div>
        <h1>answer:</h1>
        <p>{answer}</p>
        <Link to={'/questions'}>go back</Link>
    </div>
  )
}

export default Answer