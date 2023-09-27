import './App.css'

function App() {
 return(
  <>
  {/* Navbar */}
  <header>
    <nav>
      <ul className="nav-links">
        <li class="nav-items"><a href='#home'>Home</a></li>
        <li class="nav-items"><a href='#about'>About</a></li>
        <li class="nav-items"><a href='#projects'>Projects</a></li>
        <li class="nav-items"><a href='#contact'>Contact</a></li>
        
      </ul>
    </nav>
  </header>
  {/* End of Navbar */}
  <section>
    <div className="container">
      <h1>Dylan Nguyen</h1>
      <h2>Junior Software Developer</h2>
      <p>Dedicated Knowledge Connoisseur with a Passion for Lifelong Learning in the world software development.</p>
      <button className="resume-button">Résumé</button>
    </div>
  </section>
  
  </>

 )
}

export default App
