import { useEffect, useState } from 'react'
import './App.css'

const COLORS = ["pink", "green", "blue", "yellow", "purple"]

function App() {
  const [backgroundColor, setBackgroundColor] = useState(COLORS[0])
  const [renders, setRenders] = useState(-1)

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
      <div>Number of Rerenders: {renders}</div>

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
