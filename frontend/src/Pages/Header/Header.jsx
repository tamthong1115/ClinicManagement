import styles from './Header.css'
import Navbar from './navbar'

function Header() {
    return(
       <head className={styles.Header}>
            <h1>hello world</h1>
            <Navbar/>
       </head>
    )
}

export default Header