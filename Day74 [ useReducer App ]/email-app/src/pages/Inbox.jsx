import EmailCard from "../components/EmailCard";
import { EmailContextProviderFunction } from "../contexts/EmailContext";


const Inbox = () => {
  const {MAILSDATA} = EmailContextProviderFunction()


  
    

  return (
    <>
    <h2>home/all emails</h2>
    <ul className="email__box">
      { MAILSDATA?.map((email) => (
        <li key={email.mId} className="email__card">
          <EmailCard email={email}/>
        </li>
      )) }
    </ul>
    </>
  )
}

export default Inbox