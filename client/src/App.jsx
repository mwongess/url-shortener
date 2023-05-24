import Statistics from './components/statistics/statistics'
import { createContext, useContext, useEffect, useState } from 'react'
import Footer from './components/footer/Footer'
import Header from './components/header/header'
import { Main } from './components/main/Main'
import Cta from './components/cta/Cta'
import './App.css'

export const UrlShortenerContext = createContext()
// custom hook
export const useUrlShortenerContext = () => useContext(UrlShortenerContext)

const UrlShortenerProvider = ({ children }) => {
  const [url, setUrl] = useState('')
  const [errorMessaage,setErrorMessage] = useState('')
  const [shortUrl, setShortUrl] = useState('')

  const handleInputChange = (e) => {
    setUrl(e.target.value)
  }
  const handleClick = () => {
    if(!url){
      setErrorMessage('Please Add A Link')
    }

  }
  useEffect(() => {
    const shortenUrl = async () => {
      try {
        if (url) {
          const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`, {
            method: 'POST'
          })
          const data = await res.json()
          setShortUrl(data.result.short_link2)
          console.log(data)
          console.log(shortUrl);
        }

      } catch (error) {
        console.error(error)
      }
    }
    shortenUrl()
  }, [
    url
  ])

  return (
    <UrlShortenerContext.Provider value={{ handleClick, handleInputChange, url, setUrl, shortUrl,setShortUrl ,errorMessaage}}>
      {children}
    </UrlShortenerContext.Provider>
  )
}

function App() {
  return (
    <>
      <UrlShortenerProvider>
        <Header />
        <Main />
        <Statistics />
        <Cta />
        <Footer />
      </UrlShortenerProvider>

    </>
  )
}

export default App
