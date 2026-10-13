import { useEffect, useState } from 'react'

import './App.css'


function App() {

  const [counterVisible, setCounterVisible] = useState(true)

  useEffect(function(){
    setTimeout(function(){
      setCounterVisible(c = !c )
    }, 5000);
  }, [])

  return (
    <div>
      hi
      {/* {counterVisible && <Counter />} */}
      hello
    </div>
  )

}

// mounting and re-rendering, un-mounting

function Counter() {
  const [count, setCount] = useState(0)

  console.log('Counter ');

  useEffect(function(){
    console.log("hi there");
    let clock = setInterval(function(){
      consol.log("hi from inside");
      setCount((count) => count + 1)
    }, 1000);
  }, [])

  return function(){
    clearInterval(clock);
  }


  function increaseCount() {
    setCount(count + 1)
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increaseCount}>increase count</button>
    </div>
  )
}

export default App
