import styles from './Home.module.css'
import savings from '../../Img/savings.svg'
import LinkButton from '../layout/LinkButton'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <section className={styles.home_container}>
            <h1>Bem vindo ao <span>Costs</span></h1>
            <p>Comece a gerenciar os seus projetos agora mesmo!</p>
            <LinkButton to="/newproject" text="Create a new project"/>    
            <img src={savings} alt="costs"/>

        </section>
        
    )
}
export default Home