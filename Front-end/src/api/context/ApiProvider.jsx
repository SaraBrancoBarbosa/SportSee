import { useState } from "react"
import PropTypes from "prop-types"
import ApiContext from "./ApiContext"
/***** 
The provider of ApiContext
By default, "mode" state is "mocked"
The toggleMode function allows to switch between the mocked API and the Back-end API
The provider encapsulates the children by providing the context : any component gets access to "mode" and its function to swap
*****/
const ApiProvider = ({ children }) => {
    const [mode, setApiMode] = useState("mocked")
    
    const toggleMode = () => {
        setApiMode(prevMode => {
            let mode = (prevMode === "mocked" ? "back" : "mocked")
            return mode
        })
    }

    // On définit donc le contexte qui contient deux valeurs : mode et toggleMode
    return <ApiContext.Provider value={{ mode, toggleMode }}>
        {children}
    </ApiContext.Provider>
}

ApiProvider.propTypes = {
    children: PropTypes.node
}

export default ApiProvider