import { useContext } from "react";
import { Link } from 'react-router-dom';
import { EmailContext } from "../contexts/EmailContext";

const SentPage = () => {
  const {sentEmail} = useContext(EmailContext);
  return (
    <div>
      <div>
        <h2>sent mails:</h2>
      </div>
       <ul>
            {
                sentEmail.map((email) => {
                    return(
                        <li key={email.id}>
                            <Link to={`/sent/${email.id}`}>{email.subject}</Link>
                        </li>
                    )
                })
            }
        </ul>
    </div>
  )
}

export default SentPage