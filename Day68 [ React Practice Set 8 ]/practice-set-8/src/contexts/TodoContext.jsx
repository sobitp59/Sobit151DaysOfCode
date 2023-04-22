import { createContext, useEffect, useState } from "react";

import { fetchTodos } from "../apis/todoAPI";

const TodosContext = createContext();

const TodosContextProvider = ({children}) => {
    const [tasks, setTasks] = useState([])
    const [openTasks, setOpenTasks] = useState([])
    const [closeTasks, setCloseTasks] = useState([])


    const loadTodos = async () => {
        const response = await fetchTodos('https://example.com/api/todos');
        setTasks(response.data.todos)
    }

    const getAllOpenTasks = () => {
        console.log(tasks)
        const opentasks = [...tasks]?.filter(task => task.isCompleted === false)
        console.log(opentasks)
        setOpenTasks(opentasks)
    }
    
    const getAllClosedTasks = () => {
    console.log(tasks)
        const closetasks = [...tasks]?.filter(task => task.isCompleted === true)
        console.log(closetasks)
        setCloseTasks(closetasks)
    }

    const markTodoAsDone = (todoID) => {
        const todo = [...tasks].find(task => task.id === todoID);        
    }
    
    const markTodoAsUndone = (todoID) => {
        const todo = [...tasks].find(task => task.id === todoID);
    }

    useEffect(() => {
        loadTodos();
    }, []);

    useEffect(() => {
        getAllOpenTasks();
        getAllClosedTasks();
        markTodoAsDone();
        markTodoAsUndone();
    }, [tasks])


    return(
        <TodosContext.Provider value={{tasks,openTasks, closeTasks, markTodoAsDone, markTodoAsUndone}}>
            {children}
        </TodosContext.Provider>
    )
}

export { TodosContext, TodosContextProvider };

