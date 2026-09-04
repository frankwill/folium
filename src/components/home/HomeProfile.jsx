import profile from "../../assets/profile.jpg"
import styles from './HomeProfile.module.css'

const HomeProfile = () => {
  return (
    <div className={styles.profileContainer}>
      <img className={styles.profile} src={profile} alt="Sua foto de perfil" />
    </div>
  )
}

export default HomeProfile
