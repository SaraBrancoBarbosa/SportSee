import { useNavigate, useParams } from "react-router"
import useApi from "../../api/Api"
import KeyData from "./components/KeyData"
import AverageSessions from "./components/AverageSessions"
import Score from "./components/Score"
import Performances from "./components/Performances"
import Activities from "./components/Activities"
import "./profile.css"

function Profile( ) {
  
  const navigate = useNavigate()
  const { id:userId } = useParams()
  
  // useApi is used to get the active mode
  const { api } = useApi()

  // The mock or back API is used
  const { data:userProfile, loading, loaded, error } = api.useGetUser(userId)

  // Error 500 management
  if (error) {
    navigate("/error/",{state:{code:500, message:error}})
    return <></>
  }
  
  // Error 404 management
  if (loaded && !userProfile) {
    navigate("/error/",{state:{code:404, message:"Utilisateur non trouvé !"}})
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
    <>
      <div className="title-and-subtitle">
        <h1>Bonjour <span className="first-name">{userProfile.userInfos.firstName}</span></h1>
        <h2>Félicitations ! Vous avez explosé vos objectifs hier 👏</h2>
      </div>

      <div className="general-information">

        <div className="daily-and-charts">
          
          <Activities />
          
          <div className="charts">
              <AverageSessions />
              <Performances /> 
              <Score />
          </div> 

        </div>

        <KeyData />

      </div>

    </>
  )
}

export default Profile
