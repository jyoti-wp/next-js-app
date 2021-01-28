import MENU from './footer'

function MENU() {
    return (
        <nav>
            <Link href="/">
                <a>Privacy Policy</a>
            </Link>
            <Link href="/about">
                <a>Get in touch</a>
            </Link>
            <Link href="/contact-us">
                <a>Terms</a>
            </Link>

        </nav>
    )
}

export default MENU