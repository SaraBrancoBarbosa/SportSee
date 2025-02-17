import { useState } from "react"
import PropTypes from "prop-types"
import ApiContext from "./ApiContext"

const ApiProvider = ({ children }) => {
    const [mode, setApiMode] = useState("mocked")
    
    const toggleMode = () => {
        setApiMode(c => {
            let mode = (c === "mocked" ? "back" : "mocked")
            console.log(mode)
            return mode
        })
    }

    return <ApiContext.Provider value={{
        mode, toggleMode
    }}>
        {children}
    </ApiContext.Provider>
}

ApiProvider.propTypes = {
    children: PropTypes.node
}

export default ApiProvider