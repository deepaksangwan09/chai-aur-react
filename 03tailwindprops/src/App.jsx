import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Card from './components/Card'


 
function App() {

  const [count, setCount] = useState(0)

  let myObj = {
  username : "hitesh",
  age: 21
}

 let newArr = [1, 2, 3]

  return (
    <>
    <h1 className='bg-green-400 text-black rounded-xl inline-block w-fit'>Tailwind test</h1>

    <Card username="chaiaurcode" someObj={newArr}  btnText="click me"/>
    <Card username="deepak" btnText="visit me"/>

    </>
  )
}

export default App
