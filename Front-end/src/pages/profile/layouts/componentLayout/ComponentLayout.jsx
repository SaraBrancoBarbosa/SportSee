import { Outlet } from "react-router"
import "./componentLayout.css"

/***** Layout for each chart pages ******/

const ComponentLayout = () => {
  return (
    <div className="chart-container">
      <Outlet/>
    </div>
  )
}

export default ComponentLayout
