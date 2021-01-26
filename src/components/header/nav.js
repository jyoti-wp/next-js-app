import Link from 'next/link'

function Nav() {
    return(
        <nav>
            <Link href="/">
                <a>Home</a>
            </Link>
            <Link href="/about">
                <a>About Us</a>
            </Link>
            <Link href="/contact-us">
                <a>Contact Us</a>
            </Link>

        </nav>
    )
}

export default Nav