import { Outlet } from "react-router"
import "./componentLayout.css"

const ComponentLayout = () => {
  return (
    <div className="chart-container">
      <Outlet/>
    </div>
  )
}

export default ComponentLayout
