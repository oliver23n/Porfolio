import NavigationBar from "./components/NavigationBar"
import Footer from "./components/Footer"
import { Outlet } from 'react-router-dom';
// import About from "./components/About"
// import Contact from "./components/Contact"
// import Projects from "./components/Projects"
import './components/styles/index.css'

function App() {

  return (
    <>
    <NavigationBar />
      <Outlet />
    <Footer />
    </>
  )
}

export default App;
