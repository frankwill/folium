import logo from "../assets/logo.svg"
import styles from "./Home.module.css"

const Home = () => {
  return (
    <header className={styles.loginContainer}>
      <div className={styles.content}>
        <img src={logo} alt="Logotipo Folium" />
        <h1>Folium</h1>
        <p>Acompanhe a sua jornada de leitura</p>
      </div>
    </header>
  )
}

export default Home
