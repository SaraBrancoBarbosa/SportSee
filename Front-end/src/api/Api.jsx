import { useContext } from "react"
import ApiContext from "./context/ApiContext"
import apiBack from "./apis/ApiBack"
import apiMocked from "./apis/ApiMocked"

/***** 
Custom hook: to determine when the application should use the mocked data or the back-end data
apiMocked = local API ; apiBack =  real API
This hook allow to switch between the two depending on the "mode" state
*****/

const useApi = () => {
  const { mode } = useContext(ApiContext)
  
    return {
      api: mode === "mocked" ? apiMocked : apiBack  
    }
}

export default useApi