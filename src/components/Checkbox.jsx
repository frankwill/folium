import styles from './Checkbox.module.css'

const Checkbox = ({id, label}) => {
  return (
    <div className={styles.wrapper}>
      <input className={styles.checkbox} id={id} type="checkbox" name={id} />
      <label className={styles.label} htmlFor={id}>{label}</label>
    </div>
  )
}

export default Checkbox
