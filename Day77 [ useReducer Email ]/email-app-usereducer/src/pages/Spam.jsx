import EmailCard from '../components/EmailCard'
import { useEmail } from '../contexts-and-reducers/EmailContext'

const Spam = () => {
  const {spamMails} = useEmail()

  console.log(spamMails)

  return (
    <div className='email__mainpage'>
    {spamMails.length >= 1 &&  <h1 className='email__title'>spam</h1>}
    {spamMails.length === 0 && <h2 className='no_email_found'>no spam mails</h2> }
    <ul className='email__page'>
      { spamMails?.map((email) => 
        <EmailCard key={email.mId} email={email} spam/> 
      ) }
    </ul>
  </div>
  )
}

export default Spam