import { Outlet } from "react-router-dom"
import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"
import "./layout.css"

const Layout = () => {
    return (
      <div className="layout">
        <Header />

        <main className="outlet">
            <Outlet />
        </main>

        <Footer />
      </div>
    )
  }
  
  export default Layout