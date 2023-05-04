import EmailCard from "../components/EmailCard"
import { EmailContextProviderFunction } from "../contexts/EmailContext"

const Spam = () => {
  const {emails : {spam}} = EmailContextProviderFunction()
  return (
    <div>
      <h2>home/all spam emails</h2>
      <ul className="email__box">
        { spam?.map((email) => (
          <li key={email.mId} className="email__card">
            <EmailCard email={email}/>
          </li>
        )) }
      </ul>
    </div>
  )
}

export default Spam