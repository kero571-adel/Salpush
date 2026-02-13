<<<<<<< HEAD
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './Components/home'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home></Home>
    </>
  )
}

export default App
=======
import NavBarRight from "./navBarRight";
import "./App.css";
import Nav from "./navBar";
import Search from "./search";
import NavBarLeft from "./navBarLeft";
function App() {
  return (
    <>
      <Nav />
      {/* <NavBarRight/> */}
      {/* <Search/> */}
      {/* <NavBarLeft open={true}/> */}
    </>
  );
}
export default App;
>>>>>>> 77182c2a5b010dec1a81d53779a5aed0347cb85d
