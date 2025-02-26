import { Outlet } from "react-router-dom"

/***** ProfileLayout to make the Profile page and the Component pages independant ******/

const ProfileLayout = () => {
    return (
        <>
            <Outlet />
        </>
    )
}
  
  export default ProfileLayout