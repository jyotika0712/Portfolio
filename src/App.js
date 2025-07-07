// import React from 'react';
// import logo from './logo.svg';
// import './App.css';


// const App = () => {
//   return (
//     <section className="hero">
//       <nav className="navbar">
//         <div className="logo">Portfolio</div>
//         <ul className="nav-links">
//           <li>Home</li>
//           <li>About</li>
//           <li>Skills</li>
//           <li>Projects</li>
//           <li>Contact</li>
//         </ul>
//       </nav>

//       <div className="hero-content">
//         <div className="text">
//           <h1>Hi, I'm <span>John Doe</span></h1>
//           <p>Full Stack Developer passionate about creating innovative web solutions</p>
//           <div className="buttons">
//             <button className="btn-yellow">View My Work</button>
//             <button className="btn-outline">Get In Touch</button>
//           </div>
//         </div>
//         <div className="image">
//           <img src={logo} alt="Profile" />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default App;

import React from 'react';
import NavigationBar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

import './App.css';
import Footer from './components/Footer.js';

function App() {
  return (
    <div>
      <NavigationBar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;