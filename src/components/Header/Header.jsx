import styles from './Header.module.scss'

function Header(){
    return <div className={styles.header}>
        <div className={styles.up}>
                <span>Navigating the</span>
                <span>digital landscape</span>
                <span>for succes</span>
            </div>
        <div className={styles.right}><img src="/header.png" alt="header-photo" /></div>
        <div className={styles.down}>Our digital marketing agency helps businesses grow and succeed online through a range of servies including SEO, PPC, social media marketing, and content creation.
        <button>Book a consultation</button></div>
    </div>
}

export default Header;