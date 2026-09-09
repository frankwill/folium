import styles from "./Chip.module.css"

const Chip = ({ title, color, className }) => {
  return (
    <div className={`${styles[color]} ${styles.default} ${className}`}>
      <span>{title}</span>
    </div>
  )
}

export default Chip
