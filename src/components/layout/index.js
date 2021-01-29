import Nav from '../header/nav'
import Footer from '../footer/footer'


function Layout({children}) {
    return (
        <div>
            <Nav />
            {children}
            <Footer />
        </div>
    )    
}
export default Layout