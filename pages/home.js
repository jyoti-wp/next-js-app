import Layout from '../src/components/layout';
import LINK from 'next/link';
// import Image from '../public/github'; 

// console.log(Image); 

function Home () {
    return (
        <Layout>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -mx-4 -mb-10 text-center">
                        <div className="sm:w-1/2 mb-10 px-4">
                            <div className="rounded-lg h-64 overflow-hidden">
                            {/* <img alt="content" className="object-cover object-center h-full w-full" src={img} atl="GitHub"/> */}
                            </div>
                            <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">YouTube Channel</h2>
                            <p className="leading-relaxed text-base">Check my upcoming YouTube channel. Please subscribe and follow for more.</p>
                            <LINK href="https://www.youtube.com/watch?v=nydZ98CH2pU&t=6s">
                                <button className="flex mx-auto mt-6 text-white bg-yellow-500 border-0 py-2 px-5 focus:outline-none hover:bg-yellow-600 rounded">Button</button>
                            </LINK>
                        </div>
                        <div className="sm:w-1/2 mb-10 px-4">
                            <div className="rounded-lg h-64 overflow-hidden">
                            <img alt="content" className="object-cover object-center h-full w-full" src="/public/github.png"/>
                            </div>
                            <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">GitHub Profile</h2>
                            <p className="leading-relaxed text-base">I track my daily build up through GitHub. Have a peak.</p>
                        <nav>
                            <LINK href="https://github.com/jyoti-wp">
                                <button className="flex mx-auto mt-6 text-white bg-yellow-500 border-0 py-2 px-5 focus:outline-none hover:bg-yellow-600 rounded">Button</button>
                            </LINK>
                        </nav>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
    
}

export default Home


