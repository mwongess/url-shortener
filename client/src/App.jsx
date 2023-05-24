import { createContext, useContext } from 'react'
import Footer from './components/footer/Footer'
import Header from './components/header/header'
import { Main } from './components/main/Main'
import Cta from './components/cta/Cta'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <Main />
      <Cta />
      <Footer />
    </>
  )
}

export default App
