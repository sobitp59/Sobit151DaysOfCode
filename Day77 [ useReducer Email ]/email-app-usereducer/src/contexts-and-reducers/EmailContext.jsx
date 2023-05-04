import { createContext, useContext, useReducer } from "react";
import { emailReducer, initialState } from "./emailReducer";


const EmailContext = createContext();

const EmailContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(emailReducer, initialState);


    const handleDeleteMail = (emailId) => {
        const trashMail = [...state.mails].find(({mId}) => mId === emailId);
        const updatedEmails = [...state.mails].filter(({mId}) => mId !== emailId)
        dispatch({
            type : 'DELETE_MAIL', 
            payload : {
                updatedEmails : updatedEmails,
                trashMail : trashMail
            }
        })
    }

    const handleSpmaMail = (emailId) => {
        const spamMail = [...state.mails].find(({mId}) => mId === emailId );
        const updatedEmails = [...state.mails].filter(({mId}) => mId !== emailId);
        dispatch({
            type : 'SPAM_MAIL',
            payload : {
                updatedEmails : updatedEmails,
                spamMail : spamMail
            }
        })
    }

    const handleStarredEmail = (emailId) => {
        const updatedEmails = [...state.mails].map((mail) => mail.mId === emailId ? {...mail, isStarred : !mail.isStarred} : mail)
        dispatch({
            type : 'STAR_MAIL_TOGGLE',
            payload : updatedEmails
        })
    }

    const handleReadMail = (emailId) => {
        const updatedEmails = [...state.mails].map((mail) => mail.mId === emailId ? {...mail, unread : !mail.unread} : mail)
        dispatch({
            type : 'READ_MAIL_TOGGLE',
            payload : updatedEmails
        })
    }


    const unTrash = (emailId) => {
        const mail = [...state.trashMails].find(({mId}) => mId === emailId);
        const updatedEmails = [...state.trashMails].filter(({mId}) => mId !== emailId);
        console.log(mail)
        dispatch({
            type : 'UNTRASH',
            payload : {
                updatedEmails : updatedEmails,
                mail : mail,
            }
        })
    }

    const unSpam = (emailId) => {
        const mail = [...state.spamMails].find(({mId}) => mId === emailId);
        const updatedEmails = [...state.spamMails].filter(({mId}) => mId !== emailId);
        console.log(mail)
        dispatch({
            type : 'UNSPAM',
            payload : {
                updatedEmails : updatedEmails,
                mail : mail,
            }
        })
    }

    const showUnreadEmails = (e) => {
        dispatch({
            type : 'SHOW_UNREAD',
            payload : e.target.checked,
        })
    }

    const showStarredEmails = (e) => {
        dispatch({
            type : 'SHOW_STARRED',
            payload : e.target.checked,
        })
    }

    const handleSearchMail = (e) => {
        dispatch({
            type : 'SEARCH_QUERY',
            payload : e.target.value
        })
    }


    const value = {
        mails : state.mails,
        trashMails : state.trashMails,
        spamMails : state.spamMails,
        showUnread : state.showUnread,
        showStarred : state.showStarred,
        searchQuery : state.searchQuery,
        dispatch : dispatch,
        handleDeleteMail,
        handleSpmaMail,
        handleStarredEmail,
        handleReadMail,
        unTrash,
        unSpam,
        showUnreadEmails,
        showStarredEmails,
        handleSearchMail
    }

    return(
        <EmailContext.Provider value={value}>
            {children}
        </EmailContext.Provider>
    )
}

export default EmailContextProvider;

export const useEmail = () => {
    return useContext(EmailContext);
}
