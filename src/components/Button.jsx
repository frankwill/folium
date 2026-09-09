import styles from "./Button.module.css"

const Button = ({ title, appendIcon, color, className, ...props }) => {
  return (
    <button
      className={`${styles.button} ${styles.appendIcon} ${styles[color]} ${className}`}
      {...props}
    >
      {appendIcon && (
        <span className="material-icons-outlined">{appendIcon}</span>
      )}
      <span>{title}</span>
    </button>
  )
}

export default Button
