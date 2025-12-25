import styles from './Logo.module.scss'

function Logo(){
    return <div className={styles.logo}>
        <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            xmlns="http://www.w3.org/2000/svg"
            className="icon"
        >
            <path
            d="M17.651 5.1856L35.2521 0L30.1163 17.651L35.2521 35.2521L17.651 30.1163L0 35.2521L5.1856 17.651L0 0L17.651 5.1856Z"
            fill="currentColor"
            />
        </svg>
        <span>Positivus</span>
    </div>
}

export default Logo;