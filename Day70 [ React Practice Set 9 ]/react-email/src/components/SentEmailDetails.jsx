import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { EmailContext } from '../contexts/EmailContext';

const SentEmailDetails = () => {
    const {emailID} = useParams();
    const {sentEmail} = useContext(EmailContext);

    const getEmailById = sentEmail.filter((email) => email.id === Number(emailID))
    const [{subject, message, to}] = getEmailById;
    console.log(getEmailById)

  return (
    <div>
        <h2>{subject}</h2>
        <p><strong>message : </strong>{message}</p>
        <p><strong>to : </strong>{to}</p>
        <Link to={'/sent'}>go back</Link>
    </div>
  )
}

export default SentEmailDetails