import { Outlet } from "react-router-dom"
import "../profile.css"

const ProfileLayout = () => {
    return (
        <div className="container">
            <Outlet />
        </div>
    )
  }
  
  export default ProfileLayout