import styles from "./ButtonIcon.module.css"

const ButtonIcon = ({ icon, className, ...props }) => {
  return (
    <button className={`${styles.button} ${className}`} {...props}>
      <span className="material-icons-outlined">{icon}</span>
    </button>
  )
}

export default ButtonIcon
