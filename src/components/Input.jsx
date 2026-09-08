import React from "react"
import styles from "./Input.module.css"

const Input = ({
  name,
  label,
  type,
  value,
  onChange,
  prependIcon,
  className,
  placeholder,
}) => {
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
    <div className={className}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <div className={styles.content}>
        {prependIcon && (
          <span className={`material-icons-outlined ${styles.prependIcon}`}>
            {prependIcon}
          </span>
        )}
        <input
          className={styles.input}
          id={name}
          name={name}
          type={typeInput}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
        {type === "password" && (
          <button
            type="button"
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
