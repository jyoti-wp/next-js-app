import Nav from '../header/nav'
import Footer from '../footer'

function Layout({children}) {
    return (
        <div>
            <Nav />
            {children}
        </div>
    )    
}
export default Layout