import styles from './Navbar.module.scss'
import Logo from '../Logo/Logo'
import Navigation from '../Navigation/Navigation'

function Navbar(){
    return <div className={styles.navbar}>
        <Logo />
        <Navigation />
    </div>
}

export default Navbar;