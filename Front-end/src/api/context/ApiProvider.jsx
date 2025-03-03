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

    // The context is defined with two values: mode and toggleMode
    return <ApiContext.Provider value={{ mode, toggleMode }}>
        {children}
    </ApiContext.Provider>
}

ApiProvider.propTypes = {
    children: PropTypes.node
}

export default ApiProvider