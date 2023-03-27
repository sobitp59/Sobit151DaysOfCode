// fetch('https://jsonplaceholder.typicode.com/todos')
// .then(response => response.json())
// .then(data => {
//     let trueCount = 0;
//     let falseCount = 0;
//     data.map(({completed}) => completed ? trueCount++ : falseCount++)
//     console.log(trueCount, falseCount)
// })


const outputDiv = document.querySelector('#output');

const url = 'https://jsonplaceholder.typicode.com/todos';


const getTodoTitles = async (url) => {
    const fetchData = await fetch(url);
    const response = await fetchData.json()
    return response
}

const renderTodo = () => {
    getTodoTitles(url)
    .then(data => data.map(({title, completed}) => {
        if(completed){
            outputDiv.innerHTML += `<label>${title} <input type='checkbox' checked></label> <br>`
        }else{
            outputDiv.innerHTML += `<label>${title} <input type='checkbox'></label> <br>`
        }
    }))
}
renderTodo()

