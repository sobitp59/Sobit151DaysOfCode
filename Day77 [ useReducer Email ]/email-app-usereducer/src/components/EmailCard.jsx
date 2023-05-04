import { Link } from "react-router-dom"
import { useEmail } from "../contexts-and-reducers/EmailContext"

const EmailCard = ({email, trash, spam}) => {
    const {handleDeleteMail, handleSpmaMail, handleStarredEmail, handleReadMail, unTrash, unSpam, unRead} = useEmail()
  return (
    <li className="email__card" key={email.mId}>

        <div className="email__header">
          <h3 className="email__subject">{email.subject}</h3>
          {!trash && !spam  && <button className="email__star" onClick={() => handleStarredEmail(email.mId)}>{email.isStarred ? <i className="fa-solid fa-star star"></i> : <i className="fa-regular fa-star star"></i> }</button> }
        </div>

      
        <p className="email__content">{email.content}</p>
        <div className="email__footer">
            <div>
                { trash ? (<button className="email__button" onClick={() => unTrash(email.mId)}>restore</button>) : spam ? <button className="email__button" onClick={() => unSpam(email.mId)}>not spam</button> :
                <>
                 <button className="email__button" onClick={() => handleDeleteMail(email.mId)}>delete</button>
                 <button className="email__button" onClick={() => handleSpmaMail(email.mId)}>spam</button>
                 <button className="email__button" onClick={() => handleReadMail(email.mId)}>{email.unread ? 'read' : 'unread'}</button>
                </>
       }
            </div>

            <div>
                <Link className="email__details" to={`/email/${email.mId}`}>view details</Link>
            </div>
        </div>
    </li>
  )
}

export default EmailCard