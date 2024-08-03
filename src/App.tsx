import { Home } from "./infraestructure/home"
import { About } from "./infraestructure/about"
import { Navbar } from "./infraestructure/navbar"



export const App = () => {


  return (
    <>
      <Navbar/>
      
      <Home />

      <About />
      
    </>
  )
}

