import styles from "./Header.module.css"

function Header({title,slogan,avatar}){
    return(
        <header className={styles.header}> 
            <img className={styles.headerAvatar} src={avatar} alt="avatar"/>
            <h1 className={styles.headerTitle}>{title}</h1>
            <hr className="dividerLight" />
            <p className={styles.headerSlogan}>{slogan}</p>
        </header>
    )
}


export default Header;