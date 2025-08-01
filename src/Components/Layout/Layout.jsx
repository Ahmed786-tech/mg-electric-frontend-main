import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const Layout = () => {
    return (
        <div style={{ background: 'radial-gradient(37.83% 99.42% at 50% 50%, #003B67 0%, #001A33 100%)', minHeight: '100vh', width: '100%', overflow: "hidden" }}>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout