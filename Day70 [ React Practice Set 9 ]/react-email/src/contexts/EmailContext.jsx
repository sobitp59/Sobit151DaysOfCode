import { createContext, useEffect, useState } from "react";
import { fetchEmails } from "../apis/emailAPI";

const EmailContext = createContext();

const EmailContextProvider = ({children}) => {
    const [inboxEmail, setInboxEmail] = useState([])
    const [sentEmail, setSentEmail] = useState([])


    const getAllEmails = async() => {
        const response = await fetchEmails('https://example.com/api/allemails');
        if(response.status === 200){
            console.log(response.data.sentEmails);
            setInboxEmail(response.data.emails);
            // setInboxEmail(response.data.);
            setSentEmail(response.data.sentEmails);
        }
    }

    const onMarkAsReadClick = (id) => {
        const updateEmails = [...inboxEmail].map((email) => {
            if(email.id === id){
                return {...email, read : !email.read}
            }else{
                return email
            }
        })

        setInboxEmail(updateEmails)
    }

    useEffect(() => {
        getAllEmails()
    }, [])


    return(
        <EmailContext.Provider value={{inboxEmail , sentEmail, onMarkAsReadClick}}> 
            {children}
        </EmailContext.Provider>
    )
}

export { EmailContext, EmailContextProvider };

