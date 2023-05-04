import EmailCard from "../components/EmailCard";
import { EmailContextProviderFunction } from "../contexts/EmailContext";

const Starred = () => {
    let {MAILSDATA} = EmailContextProviderFunction()
    const starredMail  = [...MAILSDATA].filter((mail) => mail.isStarred);
    
    // star = starredMail;
  return (
      <div>
      <h2>home/all trash emails</h2>
      <ul className="email__box">
        { starredMail?.map((email) => (
          <li key={email.id} className="email__card">
            <EmailCard  email={email}/>
          </li>
        )) }
      </ul>
    </div>
  )
}

export default Starred