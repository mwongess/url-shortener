import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Statistics from './components/statistics/statistics'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
       < Statistics />
      </div>
      
    </>
  )
}

export default App
