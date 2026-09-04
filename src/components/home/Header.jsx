import styles from "./Header.module.css"
import logo from "../../assets/logo.svg"
import Input from "../Input"
import HomeProfile from "./HomeProfile"

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`${styles.content} container`}>
        <div className={styles.logoContent}>
          <img src={logo} alt="Logotipo Folium" className={styles.logo} />
          <h1 className={styles.title}>Folium</h1>
        </div>
        <Input
          id="searchBooks"
          placeholder="Busque seus livros..."
          prependIcon="search"
          className={styles.inputWrapper}
        />
        <HomeProfile />
      </div>
    </header>
  )
}

export default Header
