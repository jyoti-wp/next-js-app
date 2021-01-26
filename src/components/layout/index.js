import Nav from '../header/nav'

function Layout({children}) {
    return (
        <div>
            <Nav />
            {children}
        </div>
    )    
}
export default Layout