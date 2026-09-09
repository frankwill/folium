import styles from "./Tabs.module.css"

const Tabs = ({ tabs, selectedTab, onChange }) => {

  function handleSelectedTab({ target }) {
    onChange(target.value)
  }

  return (
    <div className={`${styles.wrapper}`}>
      <div className={styles.container}>
        {tabs.map((tab) => (
          <button
            key={tab.value}
            className={styles.button}
            value={tab.value}
            tabIndex={selectedTab === tab.value ? "0" : "-1"}
            aria-selected={selectedTab === tab.value}
            onClick={handleSelectedTab}
          >
            {tab.title}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Tabs
