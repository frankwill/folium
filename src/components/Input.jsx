import React from "react"
import styles from "./Input.module.css"

const Input = ({ id, label, type, ...props }) => {
  const [isVisible, setIsVisible] = React.useState(false)
  const [typeInput, setTypeInput] = React.useState(() =>
    type === "password" ? "password" : "text",
  )

  function handleIsVisibleIcon() {
    setIsVisible(!isVisible)
    if (isVisible === false) {
      setTypeInput("text")
      return
    }

    setTypeInput("password")
  }

  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <div className={styles.content}>
        <input className={styles.input} id={id} type={typeInput} {...props} />
        {type === "password" && (
          <button
            className={styles.passwordButton}
            onClick={handleIsVisibleIcon}
          >
            <span className="material-icons-outlined">
              {isVisible ? "visibility" : "visibility_off"}
            </span>
          </button>
        )}
      </div>
    </div>
  )
}

export default Input
