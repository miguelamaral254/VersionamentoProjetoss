import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Container from './Components/layout/Container';
import Footer from './Components/layout/Footer';
import Navbar from './Components/layout/Navbar';
import Company from './Components/Pages/Company';
import Contact from './Components/Pages/Contact';
import Home from './Components/Pages/Home';
import NewProject from './Components/Pages/NewProject';
import Project from './Components/Pages/Project';
import Projects from './Components/Pages/Projects';




function App() {
  return (
    <Router>
      <Navbar/>
      <Container customClass="min_height">
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/projects" element={<Projects />}/>
          <Route ecact path='/company' element={<Company />}/>
          <Route exact path="/contact" element={<Contact />}/>
          <Route exact path="/newproject" element={<NewProject />}/>
          <Route exact path="/project/:id" element={<Project/>} />
        </Routes>
        
      </Container>
      <Footer/>
    </Router>
  
  );
}

export default App;
