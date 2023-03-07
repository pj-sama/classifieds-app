import Link from "next/link"
import Image from "next/image"

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <Image src="/logo.png" alt="logo" width={32} height={32}/>
            </div>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/classifieds">Classifieds</Link>
        </nav>
    )
}

export default Navbar