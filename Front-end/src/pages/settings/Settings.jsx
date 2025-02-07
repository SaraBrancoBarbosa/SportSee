import { useContext } from "react"
import useApi from "../../api/Api"
import ApiContext from "../../api/context/ApiContext"
import "./settings.css"

function Settings() {
    
    const { toggleMode, mode:apiMode } = useContext(ApiContext)
  
    const { api } = useApi()

    return (
        <div className="main-container">
        
            <h1>Switch les données :</h1>
        
            <div>
                <button onClick={() => {
                toggleMode()
                }}>{apiMode}</button>

                <button onClick={() => {
                api.getUsers()
                }}>getUsers</button>

                <button onClick={() => {
                api.getUserSession()
                }}>getUserSession</button>
            </div>
        
        </div>
    )
}

export default Settings