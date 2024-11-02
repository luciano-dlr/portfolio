import { Home } from "./infraestructure/home";
import { About } from "./infraestructure/about";
import { Navbar } from "./infraestructure/navbar";
import { Footer } from "./infraestructure/footer";
import { Contact } from "./infraestructure/contact";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, Bounce } from "react-toastify";
import { Projects } from "./infraestructure/projects";

export const App = () => {
  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};
