import styles from './Navbar.module.scss'
import Logo from '../Logo/Logo'

function Navbar(){
    return <div className={styles.navbar}>
        <Logo />
    </div>
}

export default Navbar;