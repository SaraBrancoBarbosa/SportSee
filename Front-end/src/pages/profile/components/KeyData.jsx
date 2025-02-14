import { useNavigate, useParams } from "react-router"
import useApi from "../../../api/Api"
import KeyData from "../../../components/charts/KeyData"
import "../profile.css"

function PageKeyData( ) {
  
  const navigate = useNavigate()
  const { id:userId } = useParams()
  
  // On utilise useAPI pour récupérer le mode actif
  const { api } = useApi()

  // On utilise l'API mocked ou back
  const { data:keyData, loading, loaded, error } = api.useGetKeyData(userId)

  // Error 500 management
  if (error) {
    navigate("/error/",{state:{code:500, message:error}})
    return <></>
  }
  
  // Error 404 management
  if (loaded && !keyData) {
    navigate("/error/",{state:{code:404, message:"Données non trouvées !"}})
    return <></>
  }
  
  // Loading message
  if (loading || !loaded) {
    return (
    <div className="loading">
        Chargement des informations
        <span className="spinner"></span>
    </div>
    )
  }

  return (
      <KeyData keyData={keyData} />
  )
}

export default PageKeyData
