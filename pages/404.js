import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const FourOhFour = () => {
    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 4000);
    }, [router]);

    return (
		<div className='not-found'>
			<h1>Well...</h1>
			<h2>this is awkward</h2>
			<p>Sorry, there is nothing to see here.</p>
			<p>Lets have someone come take you back to the <Link href='/'>Homepage</Link>!</p>
		</div>
	);
}

export default FourOhFour;