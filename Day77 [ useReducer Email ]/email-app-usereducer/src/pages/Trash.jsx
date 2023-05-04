import EmailCard from '../components/EmailCard'
import { useEmail } from '../contexts-and-reducers/EmailContext'

const Trash = () => {
  const {trashMails} = useEmail()

  console.log(trashMails)

  return (
    <div className='email__mainpage'>
      {trashMails.length >= 1 &&  <h1 className='email__title'>trash</h1>}
      {trashMails.length === 0 && <h2 className='no_email_found'>no trash mails</h2> }
      <ul className='email__page'>
        { trashMails?.map((email) => 
          <EmailCard key={email.mId} email={email} trash /> 
        ) }
      </ul>
    </div>
  )
}

export default Trash