import logo from "../assets/logo.svg"
import styles from "./Login.module.css"

const Login = () => {
  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <img src={logo} alt="Logotipo Folium" />
        <h1 className={styles.title}>Folium</h1>
        <p>Acompanhe a sua jornada de leitura</p>
        <button className="button-primary">Entrar</button>
      </div>
    </header>
  )
}

export default Login
