import { Link } from 'react-router-dom'
import Container from './Container'
import styles from './Navbar.module.css'
import logo from '../../Img/costs_logo.png'

function Navbar(){
    return(
        <nav className={styles.navbar}> 
            <Container>
                <Link to="/">
                    <img src={logo} alt='Costs' />
                 </Link>
                 <button className={styles.btn}>hello</button>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={styles.item}>
                    <Link to="/projects">Projects</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/company">Company</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/contact">Contact</Link>
                    </li>
                    
                    
                </ul>
            </Container>
        </nav>
    )
}
export default Navbar