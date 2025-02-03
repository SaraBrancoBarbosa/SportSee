import { useEffect, useState } from "react"
import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from "../mocked-data/mockedData"
const useFetchUserProfile = (userId) => {
    
    const [usersProfile, setUsersProfile] = useState(null)
    const [loading, setLoading] = useState(false)
    const [loaded, setLoaded] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        
        // Async func inside useEffect
        const loadUsers = async() => {
            setTimeout(() => {
                new Promise((resolve, reject) => {
                    const userMainData = USER_MAIN_DATA.find(user => user.id === userId)
                    const userActivity = USER_ACTIVITY.find(user => user.userId === userId)
                    const userAverageSessions = USER_AVERAGE_SESSIONS.find(user => user.userId === userId)
                    const userPerformance = USER_PERFORMANCE.find(user => user.userId === userId)
          
                    if (userMainData && userActivity && userAverageSessions && userPerformance) {
                        resolve({ userMainData, userActivity, userAverageSessions, userPerformance })
                    } else {
                        reject("Récupération des données utilisateur : échec !")
                    }
                })
                .then(data => {
                    setUsersProfile(data)
                    setLoaded(true)
                })
                .catch((error) => {
                    console.log(error)
                    setError("Oh non une erreur !")
                })
                .finally(() => {
                    setLoading(false)
                })
            // Loading simulation    
            }, 1000)
        } 

        setError(null)
        setLoaded(false)
        setLoading(true)
        loadUsers()

    }, [userId])

    return {
        usersProfile,
        loading,
        loaded,
        error,
    }
}

export default useFetchUserProfile