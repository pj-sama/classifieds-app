import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <>
            <Head>
                <title>Classifieds | Home</title>
                <meta name="keywords" content="classifieds" />
            </Head>
            <div>
                <h1 className={styles.title}>Classifieds!</h1>

                <p className={styles.text}>A simple app designed to show you some classified ads! Pretty cool right?</p>
                <p className={styles.text}>Elit adipisicing nostrud nisi commodo incididunt dolore excepteur eu sit elit nisi dolor laborum do. Sit laboris velit eu do eiusmod eiusmod duis ea officia sit id officia. Incididunt tempor consequat labore adipisicing consequat fugiat laboris reprehenderit sint sunt. Fugiat incididunt ipsum amet culpa ullamco non aliquip reprehenderit labore sit nostrud. Adipisicing consectetur exercitation proident qui aliquip id do mollit ipsum id. Ea ad reprehenderit ullamco tempor aute commodo officia proident incididunt cupidatat aliquip officia Lorem. Sunt ad fugiat irure culpa eiusmod reprehenderit proident adipisicing velit.</p>
                <p className={styles.text}> Woah cool! Take me to all the classifieds!</p>
                <Link href={`/classifieds`} className={styles.btn}> Take Me There! </Link>
            </div>
        </>
    )
}
