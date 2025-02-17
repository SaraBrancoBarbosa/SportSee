import { useContext } from "react"
import ApiContext from "./context/ApiContext"
import apiBack from "./apis/ApiBack"
import apiMocked from "./apis/ApiMocked"

const useApi = () => {
  const { mode } = useContext(ApiContext)
  
    return {
      api: mode === "mocked" ? apiMocked : apiBack  
    }
}

export default useApi