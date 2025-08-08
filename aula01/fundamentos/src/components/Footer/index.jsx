import styles from "./Footer.module.css"

const Footer = (props) => {
    return(
        <>
            <footer className={styles.footer}>
                <p className={styles.copyright}>Criado por {props.copyright}</p>
            </footer>
        </>
    )
}

export default Footer;