import React from 'react'
import styles from './Home.module.css'

const Home = () => {

return(
    <main className={styles.main}>
    <div className={styles.home}>
    <h1>Welcome to XyZ application!</h1>
    <h2>Click on one user in sidenav to see information about him and his/hers albums.</h2>
    <h2>Do you want to see photos of one album? Just click on its title!</h2>
    <h3>Have fun!</h3>
    </div>
    </main>
)
}

export default Home