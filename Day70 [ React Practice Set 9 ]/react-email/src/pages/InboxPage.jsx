import { useContext } from "react";
import { EmailContext } from "../contexts/EmailContext";

import { Link } from 'react-router-dom';

const InboxPage = () => {
    const {inboxEmail, onMarkAsReadClick} = useContext(EmailContext);

    return (
    <div>
        <h2>inbox email</h2>
        <p><strong>read mails: </strong>{inboxEmail.filter(email => email.read).length}</p>
        <p><strong>unread mails: </strong>{inboxEmail.filter(email => !email.read).length}</p>
        <ul>
            {
                inboxEmail.map((email) => {
                    return(
                        <li key={email.id}>
                            <Link to={`/inbox/${email.id}`}>{email.subject}</Link>
                            <button onClick={() => onMarkAsReadClick(email.id)}>{email.read ? 'mark as unread' : 'mark as read'}</button> 
                        </li>
                    )
                })
            }
        </ul>
    </div>
  )
}

export default InboxPage