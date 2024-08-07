import { Home } from "./infraestructure/home"
import { About } from "./infraestructure/about"
import { Navbar } from "./infraestructure/navbar"
import { History } from "./infraestructure/history"
import { Footer } from "./infraestructure/footer"
import { Contact } from "./infraestructure/contact"



export const App = () => {


  return (
    <>
      <Navbar/>
      
      <Home />


      <About />
      
      <History/>


      <Contact/>
      
      <Footer/>

      
    </>
  )
}

