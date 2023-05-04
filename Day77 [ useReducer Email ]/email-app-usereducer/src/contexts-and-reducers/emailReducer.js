import { mails } from "../Database/emailDB";

const initialState = {
    mails,
    trashMails : [],
    spamMails : [],
    showUnread : false,
    showStarred : false,
    searchQuery : '' 
}

const emailReducer = (state, action) => {
    switch (action.type){
        case 'DELETE_MAIL' : {
            return{
                ...state,
                mails : action.payload.updatedEmails,
                trashMails : [...state.trashMails,  action.payload.trashMail] 
                }
        }

        case 'SPAM_MAIL': {
            return {
                ...state,
                mails : action.payload.updatedEmails,
                spamMails : [...state.spamMails, action.payload.spamMail]
            }
        }

        case 'STAR_MAIL_TOGGLE' : {
            return {
                ...state,
                mails : action.payload
            }
        }
        
        case 'READ_MAIL_TOGGLE' : {
            return {
                ...state,
                mails : action.payload
            }
        }
         
        case 'UNTRASH' : {
            return{
                ...state,
                mails : [...state.mails, action.payload.mail],
                trashMails : action.payload.updatedEmails 
            }
        }

        case 'UNSPAM' : {
            return{
                ...state,
                mails : [...state.mails, action.payload.mail],
                spamMails : action.payload.updatedEmails 
            }
        }

        case 'SHOW_UNREAD' : {
            console.log(action.payload)
            return {...state, showUnread : action.payload}
        }

        case 'SHOW_STARRED' : {
            console.log(action.payload)
            return {...state, showStarred : action.payload}
        }

        case 'SEARCH_QUERY': {
            console.log(action.payload)
            return {...state, searchQuery : action.payload}
        }






        default : return state;
    }


}

export { initialState, emailReducer };

