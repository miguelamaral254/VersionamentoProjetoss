import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Container from './Components/layout/Container';
import Company from './Components/Pages/Company';
import Contact from './Components/Pages/Contact';
import Home from './Components/Pages/Home';
import NewProject from './Components/Pages/NewProject';




function App() {
  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/company">Company</Link>
        <Link to="/newproject">New Project</Link>
        </div>
      <Container customClass="min_height">
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route ecact path='/company' element={<Company />}/>
          <Route exact path="/contact" element={<Contact />}/>
          <Route exact path="/newproject" element={<NewProject />}/>
        </Routes>
        
      </Container>
      <footer>Footer</footer>
    </Router>

  );
}

export default App;
