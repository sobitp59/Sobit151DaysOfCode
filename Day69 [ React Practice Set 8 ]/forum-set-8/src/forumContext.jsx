import { createContext, useEffect, useState } from "react";
import { fetchForunAPI } from "./api/forumAPI";

const ForumContext = createContext();



const ForumContextProvider = ({children}) => {
    const [questions, setQuestions] = useState([])   
    
    const loadQuestions = async () => {
        const response = await fetchForunAPI('https://example.com/api/questions');
        console.log(response.data.questions)
        setQuestions(response.data.questions)
    }

    useEffect(() => {
        loadQuestions()
    }, [])

    return <ForumContext.Provider value={{questions}}>
        {children}
    </ForumContext.Provider>
}

export { ForumContext, ForumContextProvider };

