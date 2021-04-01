//Component Import
import NavBar from "../NavBar/NavBar"

const Layout = ({ children }) => {
    return (
        <>
            <NavBar />
            <div>
                <main>{children}</main>
            </div>
        </>
    )
}

export default Layout;