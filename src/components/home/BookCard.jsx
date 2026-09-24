import bookPhoto from "../../assets/the-midnitght-library.png"
import ButtonIcon from "../ButtonIcon"
import styles from "./BookCard.module.css"
import Chip from "./Chip"
import Rating from "./Rating"

const BookCard = ({ book }) => {
  const isRead = book.status === "1"
  const isWhishList = book.status === "2"

  return (
    <div className={styles.cardContainer}>
      <img src={bookPhoto} alt="Capa do livro" className={styles.cardImage} />
      <div className={styles.cardContent}>
        <div className={styles.cardInfos}>
          <div>
            <p className={styles.title}>{book.title}</p>
            <p className={styles.author}>{book.author}</p>
          </div>
          <ButtonIcon icon="more_vert" className={styles.buttonIcons} />
        </div>
        {isRead ? (
          <Chip title="Lido" color="success" className={styles.cardChip} />
        ) : isWhishList ? (
          <div className={styles.chipWishlist}>
            <Chip title="Desejado" className={styles.cardChip} />
          </div>
        ) : null}
        {isRead && <Rating ratings={book.rating} />}
      </div>
    </div>
  )
}

export default BookCard
