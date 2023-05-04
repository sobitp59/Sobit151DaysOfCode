import React from 'react';
import { useParams } from 'react-router-dom';
import { EmailContextProviderFunction } from '../contexts/EmailContext';

const EmailDetails = () => {
    const {emails : {mails}} = EmailContextProviderFunction()
    const {emailID} = useParams();

    const email = mails.find((email) => email.mId === emailID)
    console.log(email)
  return (
    <div><>
    <section>
        <h3>Subject : {email.subject}</h3>
        <button>⭐</button>
      </section>
      <p>{email.content}</p>
      {/* <section>
        <div>
            <button>delete</button>
            <button>mark as read</button>
            <button>report spam</button>
        </div>
    </section> */}
</></div>
  )
}

export default EmailDetails