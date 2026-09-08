import profile from "../../assets/profile.jpg"
import ButtonIcon from "../ButtonIcon"
import styles from './HomeProfile.module.css'

const HomeProfile = () => {
  return (
    <div className={styles.profileContainer}>
      <img className={styles.profile} src={profile} alt="Sua foto de perfil" />
      <ButtonIcon className={styles.profileMenuButton} icon="menu" />
    </div>
  )
}

export default HomeProfile
