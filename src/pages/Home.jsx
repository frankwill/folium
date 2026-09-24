import Header from "../components/home/Header"
import styles from "./Home.module.css"
import Button from "../components/Button"
import Tabs from "../components/home/Tabs"
import React from "react"
import BookList from "../components/home/BookList"

const Home = () => {
  const [selectedTab, setSelectedTab] = React.useState("-1")

  const tabs = [
    { title: "Todos os livros", value: "-1" },
    { title: "Lendo no momento", value: "0" },
    { title: "Lido", value: "1" },
    { title: "Lista de desejos", value: "2" },
  ]

  const books = [
    {
      id: 1,
      title: "The Midnight Library",
      author: "Matt Haig",
      status: "1",
      rating: 5
    },
    {
      id: 2,
      title: "Atomic Habits",
      author: "James Clear",
      status: "0",
      rating: null
    },
    {
      id: 3,
      title: "Project Hail Mary",
      author: "Andy Weir",
      status: "2",
      rating: null
    },
    {
      id: 4,
      title: "The Silent Patient",
      author: "Alex Michaelides",
      status: "1",
      rating: 4
    },
  ]

  const filteredBooks =
    selectedTab === "-1"
      ? books
      : books.filter((book) => book.status === selectedTab)

  return (
    <>
      <Header />
      <main className="appMain">
        <div className={`${styles.homeContainer} container`}>
          <section className={styles.homeAddBook}>
            <h2 className={styles.title}>Meus livros</h2>
            <Button
              color="primary"
              title="Adicionar livro"
              appendIcon="add"
              className={styles.buttonAddBook}
            />
          </section>

          <section className={styles.homeBooks}>
            <Tabs
              tabs={tabs}
              selectedTab={selectedTab}
              onChange={setSelectedTab}
              className={styles.tabs}
            />
            <BookList books={filteredBooks} />
          </section>
        </div>
      </main>
    </>
  )
}

export default Home
