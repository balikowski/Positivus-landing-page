import styles from './Navigation.module.scss'
import { GiHamburgerMenu } from "react-icons/gi";
import {  useEffect, useState } from 'react'

function Navigation(){
    const [displayNavigation, setDisplayNavigation] = useState(true)

    useEffect(() => {
    const media = window.matchMedia(`(min-width: 840px)`);

    const handler = (e) => {
      if (e.matches) {
        setDisplayNavigation(false);
      }
    };

    handler(media); 
    media.addEventListener("change", handler);

    return () => media.removeEventListener("change", handler);
  }, []);

    return <div className={`${styles.navigation} ${displayNavigation && styles.displayMobile}`}>
        <div className={styles.buttonsList}>
            {console.log(displayNavigation)}
            <div className={styles.buttonsListElement}>
                <a href="#">About us</a>
            </div>
            <div className={styles.buttonsListElement}>
                <a href="#">Services</a>
            </div>
            <div className={styles.buttonsListElement}>
                <a href="#">Use Cases</a>
            </div>
            <div className={styles.buttonsListElement}>
                <a href="#">Pricing</a>
            </div>
            <div className={styles.buttonsListElement}>
                <a href="#">Blog</a>
            </div>
            <div className={`${styles.buttonsListElement} ${styles.request}`}>
                <a href="#">Request a Quote</a>
            </div>
        </div>
        <GiHamburgerMenu className={styles.burger} onClick={()=> setDisplayNavigation(prev => !prev)}/>
    </div>
}

export default Navigation;