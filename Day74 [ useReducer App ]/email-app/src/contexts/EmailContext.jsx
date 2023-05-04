import { createContext, useContext, useReducer } from "react";
import { mails } from "../DB/emailDB";
import emailReducer from "./emailReducer";

const EmailContext = createContext();

const EmailContextProvider = ({children}) => {
    const [emails, dispatch] = useReducer(emailReducer, {
        mails : mails,
        trash : [],
        spam : [],
        isStarred : false, 
        isUnread : false,
    })

    const MAILSDATA = emails?.mails?.filter(mail => {
        if (emails?.isUnread && mail.unread) {
          return true;
        } 
    
        if (emails?.isStarred && mail.isStarred) {
          return true;
        }
    
        return !emails?.isUnread && !emails?.isStarred;
      });
    
  
    return (
    <EmailContext.Provider value={{emails, dispatch, MAILSDATA}}>
        {children}
    </EmailContext.Provider>
  )
}

export default EmailContextProvider;

export const EmailContextProviderFunction = () => {
    return useContext(EmailContext)
}