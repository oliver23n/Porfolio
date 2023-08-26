import NavigationBar from "./components/NavigationBar"
import Footer from "./components/Footer"
import { Outlet } from 'react-router-dom';
import './components/styles/index.css'

function App() {

  return (
    <div className="wrapper">
      <NavigationBar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App;
