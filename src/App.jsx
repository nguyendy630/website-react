import './App.css'
import { ImHome3 } from "react-icons/im";
import { IoIosContact } from "react-icons/io";
import { GiLightBulb } from "react-icons/gi";
import {AiOutlineMail} from "react-icons/ai"

function App() {
 return(
  <>
  {/* Navbar */}
  <header>
    <nav>
      <ul className="nav-links">
        <li class="nav-items"><a href='#home'><ImHome3></ImHome3></a></li>
        <li class="nav-items"><a href='#about'><IoIosContact></IoIosContact></a></li>
        <li class="nav-items"><a href='#projects'><GiLightBulb></GiLightBulb></a></li>
        <li class="nav-items"><a href='#contact'><AiOutlineMail></AiOutlineMail></a></li>
        
      </ul>
    </nav>
  </header>
  {/* End of Navbar */}

  {/* Hero Section */}
  <section>
    <div className="container">
      <h1>Dylan Nguyen</h1>
      <h2>Junior Software Developer</h2>
      <p>Dedicated Knowledge Connoisseur with a Passion for Lifelong Learning in the world software development.</p>
      <button className="resume-button">Résume</button>
    </div>
  </section>
  {/* end of Hero Section */}

  {/* About Section */}
  
  
  </>

 )
}

export default App
