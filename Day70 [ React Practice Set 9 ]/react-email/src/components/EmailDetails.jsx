import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { EmailContext } from '../contexts/EmailContext';

const EmailDetails = () => {
    const {emailID} = useParams();
    const {inboxEmail} = useContext(EmailContext);

    const getEmailById = inboxEmail.filter((email) => email.id === Number(emailID))
    const [{subject, message, sender}] = getEmailById;

  return (
    <div>
        <h2>{subject}</h2>
        <p><strong>message : </strong>{message}</p>
        <p><strong>sender : </strong>{sender}</p>
        <Link to={'/inbox'}>go back</Link>
    </div>
  )
}

export default EmailDetails