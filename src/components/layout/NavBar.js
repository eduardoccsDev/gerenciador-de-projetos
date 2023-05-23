import { Link } from "react-router-dom";
import styles from './NavBar.module.css'
import Container from "./Container";
import Logo from '../../img/logo.png';

function NavBar(){

  const logo = './src/img/logo.png'
    return(
        <nav className={styles.navBar}>
          <Container>
            <img className={styles.logo} src={Logo} alt='Gerenciador de projetos'/>
            <ul className={styles.list}>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/empresa">Empresa</Link></li>
              <li><Link to="/projetos">Projetos</Link></li>
              <li><Link to="/contato">Contato</Link></li>
            </ul>  
          </Container>
        </nav>
    )

}
export default NavBar