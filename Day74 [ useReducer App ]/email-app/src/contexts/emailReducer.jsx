
const emailReducer = (emails, action) => {
    const {mails,trash, spam} = emails;
    switch(action.type){
        case 'DELETE_MAIL' : {
            return {...emails, 
                    mails : mails.filter((mail) => mail.mId !== action.id),
                    trash : [...trash, mails.find((mail) => mail.mId === action.id)],
                }
        }

        case 'STAR_MAIL' : {
            return {...emails, 
                mails : mails.map((mail) => {
                    if(mail.mId === action.star.mId){
                        return {...action.star, isStarred : !action.star.isStarred}
                    }else{
                        return mail;
                    }
                }),
            }
        }
        
        case 'SPAM_MAIL': {
            return {...emails, 
                mails : mails.filter((mail) => mail.mId !== action.id),
                spam : [...spam, mails.find((mail) => mail.mId === action.id)],
            }
        }

        case 'READ_MAIL' : {
            return {...emails, 
                mails : mails.map((mail) => {
                    if(mail.mId === action.read.mId){
                        return {...action.read, unread : !action.read.unread}
                    }else{
                        return mail;
                    }
                }),
            }
        }


        case 'FILTER_UNREAD' : {
            console.log(action.unread)
            return {...emails, isUnread : action.unread}
        }
        
        case 'FILTER_STARRED' : {
            console.log(action.starred)
            return {...emails, isStarred : action.starred}
        }
        
        default:{
            return emails;
        }
    }
}

export default emailReducer