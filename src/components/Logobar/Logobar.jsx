import styles from './Logobar.module.scss'

function Logobar(){
    return <div className={styles.logobar}>
        <img src="/amazon.png" alt="amazon logo" className={styles.logo} />
        <img src="/dribbble.png" alt="dribbble logo" className={styles.logo} />
        <img src="/hubspot.png" alt="hubspot logo" className={styles.logo} />
        <img src="/notion.png" alt="notion logo" className={styles.logo} />
        <img src="/netflix.png" alt="netflix logo" className={styles.logo} />
        <img src="/zoom.png" alt="zoom logo" className={styles.logo} />
    </div>
}

export default Logobar;