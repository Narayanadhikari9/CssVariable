import styles from './app.module.css'
import logo from './logo.png'
function App() {
  return (
     <>
       <div>
          <header className={styles.header}>
            <h1 className={styles.h1}>Welcome to GitHub</h1>
           <div>
            <img src={logo} height={200} width={250} />
            </div> 
            <h2 className={styles.h2}>This is end of the week</h2>
            <h3 className={styles.h3}>This is task 5</h3>
            
            <h4 className={styles.h4}>Friday</h4>
            <br></br>
          </header>
          <main className={styles.main}>
            <article className={styles.article}>
            <h1>GitHub</h1>
            <p>GitHub is an online software development platform. It's one of the greatest and hight rated software company in the world. </p>
          </article>
          </main>
          <br></br>
          <footer className={styles.footer}>
            <p >This is end of first week, so have fun guys, see you next week!</p>
          </footer>
        </div>
      </>
    )
  }
export default App
