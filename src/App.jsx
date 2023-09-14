import { useEffect, useState } from 'react'
import './App.css'

const COLORS = ["pink", "green", "blue", "yellow", "purple"]

function App() {
  const [backgroundColor, setBackgroundColor] = useState(COLORS[0])
  const [renders, setRenders] = useState(-1)
  const [person, setPerson] = useState({ firstName: "John", lastName: "Smith", age: 100})
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")

  const handleIncreaseAge = () => {
    setPerson({ ...person, age: person.age + 1 })
  }

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

  const updatePerson = () => {
    setPerson({ ...person, firstName: firstName, lastName: lastName})
  }

  useEffect(() => {
    countClicks()
  }, [backgroundColor])

  console.log(person)
  return (
    <>
      <div>Number of Background Rerenders: {renders}</div>
      
      <h1>{firstName} {lastName}</h1>
      <h2>{person.age}</h2>
      <button onClick={handleIncreaseAge}>Increase age</button>
      <button onClick={handleDecreaseAge}>Decrease age</button>
      <input 
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input 
        type="text"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <button onClick={updatePerson}>update person</button>
      <p>Name: {firstName} {lastName}</p>
      <p>age: {person.age}</p>
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
