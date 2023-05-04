import { Link, useNavigate, useParams } from "react-router-dom"
import { mails } from "../Database/emailDB"


const EmailDetails = () => {
    // const {mails, trashMails} = useEmail()

    const navigate = useNavigate()
    const {emailID} = useParams()
    
    const email =  mails?.find(({mId}) => mId === emailID)
    console.log(email)

    return (
        <div className="email__detailpage" key={email.mId}>
            <h3 className="email__subject email__view">{email.subject}</h3>
            <p className="email__content--view">{email.content}</p>
            <div>
                <button className="email__button" onClick={() => navigate(-1)}>go back</button>
            </div>
        </div>
      )
}

export default EmailDetails