import logo from "../assets/logo.svg"
import styles from "./Login.module.css"
import Button from "../components/Button"
import Input from "../components/Input"
import Checkbox from "../components/Checkbox"
import { useNavigate } from "react-router"

const Login = () => {
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    navigate('/home')
  }

  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <img className={styles.logo} src={logo} alt="Logotipo Folium" />
        <h1 className={styles.title}>Folium</h1>
        <p>Acompanhe a sua jornada de leitura</p>
        <div className={styles.card}>
          <div className={styles.cardContent}>
            <form className={styles.form} onSubmit={handleSubmit}>
              <h2>Bem-vindo de volta</h2>
              <div>
                <Input
                  id="email"
                  label="E-mail"
                  type="email"
                  placeholder="Digite o seu e-mail"
                />
                <Input
                  id="password"
                  label="Senha"
                  type="password"
                  placeholder="Digite a sua senha"
                />
                <div className={styles.rememberMe}>
                  <Checkbox id="rememberMe" label="Lembrar-me" />
                  <a href="#">Esqueceu a senha?</a>
                </div>
                <Button title="Entrar" color="primary" />
              </div>

              <p>
                Não possui uma conta?
                <a href="#">Criar uma conta</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Login
