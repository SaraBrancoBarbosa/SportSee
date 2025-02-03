import { Link } from "react-router"
import "./homepage.css"

function Homepage() {
  return (
    <div className="main-container">
      
        <h1>Les deux utilisateurs :</h1>
    
        <Link to="/user/12" className="id-link">Karl Dovineau, id 12</Link>

        <Link to="/user/18" className="id-link">Cecilia Ratorez, id 18</Link>
       
    </div>
  )
}

export default Homepage