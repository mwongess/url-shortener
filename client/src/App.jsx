import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header/header'
import { Main } from './components/main/Main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Main/>
    </>
  )
}

export default App
