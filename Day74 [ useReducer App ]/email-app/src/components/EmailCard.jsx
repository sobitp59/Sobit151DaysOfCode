import { Link } from 'react-router-dom'
import { EmailContextProviderFunction } from '../contexts/EmailContext'

const EmailCard = ({email}) => {
  const {dispatch} = EmailContextProviderFunction()
  return (
    <>
        <section>
            <h3>Subject : {email.subject}</h3>

            <button onClick={() => dispatch({type : 'STAR_MAIL', star : email})}>{email?.isStarred ? 'unstar' : 'star'}</button>

          </section>
          <p className='email__clamp'>{email.content}</p>
          <section>
            <div>
                <Link to={`/mail/${email.mId}`}>view details</Link>
            </div>
            <div>
                <button onClick={() => dispatch({type : 'DELETE_MAIL', id : email.mId })}>delete</button>
                <button onClick={() => dispatch({type : 'READ_MAIL', read : email})}>{email?.unread ? 'read' : 'unread'}</button>
                
                <button onClick={() => dispatch({type : 'SPAM_MAIL', id : email.mId})}>report spam</button>
            </div>
        </section>
    </>
  )
}

export default EmailCard