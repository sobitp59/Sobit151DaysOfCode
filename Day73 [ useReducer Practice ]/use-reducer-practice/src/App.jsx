import TododApp from "./pages/TodoApp"

function App() {

  return (
    <div className="todoapp">
      <TododApp />
    </div>
  )
}

export default App


/*
const numList = [
  { type: 'odd', payload: 1 },
  { type: 'odd', payload: 3 },
  { type: 'odd', payload: 55 },
  { type: 'even', payload: 22 },
  { type: 'even', payload: 44 },
]

// state - initial value {even : 0,  odd : 0}
// action - current value

function reducer(state, action) {
  switch (action.type){
    case 'even' : {

      return {...state, even : state.even + action.payload}
    }
    case 'odd' : {

      return {...state, odd : state.odd + action.payload}
    }
  }
}

const oddAndEvenSum = numList.reduce(reducer, {even : 0,  odd : 0})
console.log(oddAndEvenSum)
*/