import styles from "../styles/Footer.module.scss"

const Footer = () => {
  return (
    <footer className={styles.footerwrapper}>
      <div className={styles.footer}>

        <div className="">
        <img
          src="/logo-colored-full.png"
          alt="FansForBands Logo"
          style={{ width: '150px', height:'64px' }}
        />
        </div>
        <p>Welcome to FansForBands!</p>
      </div>
    </footer>



  )
}

export default Footer
