import './App.scss'
import Blogs from './components/Blogs'
import Features from './components/Features'
import Find from './components/Find'
import Footer from './components/Footer'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Properties from './components/Properties'

function App() {

  return (
    <div className="App">
      {/* <Navbar /> */}
      <Header />
      <Features />
      <Properties />
      <Blogs />
      <Find />
      <Footer />
    </div>
  )
}

export default App
