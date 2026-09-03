import styles from "./Button.module.css"

const Button = ({ title, appendIcon, color = 'button' }) => {
  return (
    <button className={`${styles.appendIcon} ${styles[color]}`}>
      {appendIcon && <span className="material-icons-outlined">{appendIcon}</span>}
      <span>{title}</span>
    </button>
  )
}

export default Button
