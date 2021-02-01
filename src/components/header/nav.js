import Link from 'next/link'

function Nav() {
    return(
        <nav>
            <header class="text-gray-600 body-font">
                <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <svg xmlns="/public/favicon.ico" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                        </svg>
                        <span class="ml-3 text-xl">Nextjs App</span>
                    </a>
                    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        <Link href="/home">
                            <a class="mr-5 hover:text-gray-900">Home</a>
                        </Link>
                        <Link href="/about">
                            <a class="mr-5 hover:text-gray-900">About Us</a>
                        </Link>
                        <Link href="/contact-us">
                            <a class="mr-5 hover:text-gray-900">Contact Us</a>
                        </Link>
                        <Link href="/blog">
                            <a class="mr-5 hover:text-gray-900">Blog</a>
                        </Link>
                    </nav>
                    <button class="inline-flex items-center bg-yellow-100 border-0 py-1 px-3 focus:outline-none hover:bg-yellow-600 rounded text-base mt-4 md:mt-0">Click Here
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                    </button>
                </div>
            </header>
        </nav>
    )
}

export default Nav