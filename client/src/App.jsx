import './App.css'
import Header from './components/header/header'
import { Main } from './components/main/Main'
import Footer from './components/footer/Footer'
import Cta from './components/cta/Cta'
import Statistics from './components/statistics/statistics'
function App () {
  return (
    <div>
      <Header />
      <Main />
      <Statistics />
      <Cta />
      <Footer />
    </div>
  )
}

export default App
