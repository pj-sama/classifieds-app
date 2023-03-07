import Link from 'next/link';
import styles from '../../styles/Classifieds.module.css';

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();

    return {
        props: { classifieds: data }
    }
}

const ClassifiedsList = ({ classifieds}) => {
    return (
		<div>
			<h1>Classifieds!</h1>
			<p> Woah look at all these Classifieds</p>
            {classifieds.map(classified => (
                <div key={classified.id}>
                    <Link href={`/classifieds/${classified.id}`} className={styles.single}>
                            <h3>{classified.title}</h3>
                    </Link>
                </div>
            ))}
		</div>
	);
}

export default ClassifiedsList;