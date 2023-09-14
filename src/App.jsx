import { useEffect, useState } from 'react'
import './App.css'

const COLORS = ["pink", "green", "blue", "yellow", "purple"]

function App() {
  const [backgroundColor, setBackgroundColor] = useState(COLORS[0])
  const [renders, setRenders] = useState(-1)
  const [person, setPerson] = useState({ name: "John", age: 100})

  const handleIncreaseAge = () => {
    console.log("in handleIncreaseAge (before setPerson call): ", person)
    
    setPerson({ ...person, age: person.age + 1 })
    console.log("in handleIncreaseAge (after setPerson call): ", person)
  }

  console.log("during render: ", person)

  const handleDecreaseAge = () => {
    const newYoungerPerson = { ...person, age: person.age - 1}
    setPerson(newYoungerPerson)
  }

  const onButtonClick = (color) => () => {
    setBackgroundColor(color)
  }

  const countClicks = () => {
    setRenders( renders + 1)
  }

  useEffect(() => {
    countClicks()
  }, [backgroundColor])

  return (
    <>
      <div>Number of Background Rerenders: {renders}</div>
      
      <h1>{person.name}</h1>
      <h2>{person.age}</h2>
      <button onClick={handleIncreaseAge}>Increase age</button>
      <button onClick={handleDecreaseAge}>Decrease age</button>

      <div
        className='App'
        style={{
          backgroundColor,
        }}
      >
        {COLORS.map((color) => (
          <button 
            type="button"
            key={color}
            onClick={onButtonClick(color)}
            className={backgroundColor === color ? "selected" : ""}
          >
            {color}
          </button>
        ))}
      </div>  
    </>
  )
}

export default App
