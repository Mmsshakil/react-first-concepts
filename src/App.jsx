
import './App.css'
import Friends from './Friends';
import Team from './team';
import Users from './user';


function App() {


  return (
    <>

      <Friends></Friends>
      <Users></Users>

      <Team></Team>

      <h1>React & Vite</h1>
      <h2>My Bio data:</h2>
      <Person></Person>
    </>
  )
}

function Person() {
  const name = 'shakil';
  const id = 75;

  return (
    <div className='student'>
      <h3>I am {name} and my id is {id}</h3>
    </div>
  )
}

export default App
