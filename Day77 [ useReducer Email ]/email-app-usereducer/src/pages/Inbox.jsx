import EmailCard from '../components/EmailCard';
import { useEmail } from '../contexts-and-reducers/EmailContext';

const Inbox = () => {
  const {mails, searchQuery, showUnread, showStarred, showUnreadEmails, showStarredEmails, handleSearchMail} =  useEmail();


  const unreadMails = mails.filter(({unread}) => unread)
  const starredMails = mails.filter(({isStarred}) => isStarred)
  const starredAndUnread = mails.filter(({isStarred, unread}) => isStarred && unread);

  const unreadORstarred  = showUnread ? unreadMails : showStarred ? starredMails : null 

  
  const allMails = showStarred && showUnread ? starredAndUnread : !showStarred && !showUnread ? mails : unreadORstarred
  const getMails =  allMails.filter(({subject}) => subject.toLowerCase().includes(searchQuery.toLowerCase()) )

  console.log(getMails)

  return (
    <div className='email__mainpage'>
      <h1 className='email__title'>inbox</h1>
      


      <fieldset className='email__fieldset'>
        <legend className='email__legened'>filter <i className="fa-solid fa-filter"></i></legend>
        
       <div className='email__filters'>

        <section>

        <label htmlFor="">
          <input className='email__search' type="text" placeholder='search mail' onChange={handleSearchMail}/>
        </label>
        </section>

        <section className='email__checkboxes'>


        <label htmlFor="" >
          show unread mails
          <input className='email__checkbox' type="checkbox" onChange={showUnreadEmails}/>
        </label>
        <label htmlFor="">
          show starred mails
          <input className='email__checkbox' type="checkbox" onChange={showStarredEmails}/>
        </label>
      
        </section>
       </div>
      </fieldset>

      {getMails.length === 0 && <h1 className='no_email_found'>no mail found</h1> }


      <ul className='email__page'>
        { getMails?.map((email) => 
          <EmailCard key={email.mId} email={email}/> 
        ) }
      </ul>
    </div>
  )
}

export default Inbox