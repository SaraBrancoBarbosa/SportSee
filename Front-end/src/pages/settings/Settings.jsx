import { useContext } from "react"
import { Link } from "react-router"
import ApiContext from "../../api/context/ApiContext"
import "./settings.css"

/***** For now, the Settings page is used to switch the API and to get the 12 and 18 users page easily ******/

function Settings() {
    
    // Hook useContext: get the ApiContext values =>
        // toggleMode to swap the API
        // mode (apiMode): mode's current state
    const { toggleMode, mode:apiMode } = useContext(ApiContext)

    const buttonText = apiMode === "mocked" 
        ? <>Actuellement sur les données <span className="button-span">mockées</span></>
        : <>Actuellement sur les données du <span className="button-span">Back-End</span></>
  
    return (
        <div className="main-container">
        
            <h1>Switch les données :</h1>
        
            <div>
                <button className="button" onClick={() => {toggleMode()}}>
                    {buttonText}
                </button> 
            </div>

            <h1>Les deux utilisateurs :</h1>
    
            <Link to="/user/12" className="id-link">Karl Dovineau, id 12</Link>

            <Link to="/user/18" className="id-link">Cecilia Ratorez, id 18</Link>
        
        </div>
    )
}

export default Settings