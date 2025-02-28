import ApiTemplate from "./ApiTemplate"
import useFetch from "../../hooks/useFetch"

/***** Back API. The route.js file is used to find the paths *****/

// For the future deployment of the application. The localhost:3000 address is in the .env file
const API_CONFIG = {
    host: import.meta.env.VITE_HOST,
    userPath: (userId) => `${API_CONFIG.host}/user/${userId}`
} 

// The useFetch hook is used
const useFetchUserProfile = (userId) => useFetch(`${API_CONFIG.userPath(userId)}`, `User-${userId}`, (data) =>
    data?data.data:undefined
)

const useFetchAverageSessions = (userId) => useFetch(`${API_CONFIG.userPath(userId)}/average-sessions`, `Sessions-${userId}`, (data) =>
    data?data.data:undefined
)

const useFetchPerformances = (userId) => useFetch(`${API_CONFIG.userPath(userId)}/performance`, `Performances-${userId}`, (data) =>
    data?data.data:undefined
)

const useFetchKeyData = (userId) => useFetch(`${API_CONFIG.userPath(userId)}`, `KeyData-${userId}`, (data) =>
    data?data.data:undefined
)

const useFetchActivities = (userId) => useFetch(`${API_CONFIG.userPath(userId)}/activity`, `Activities-${userId}`, (data) =>
    data?data.data:undefined
)

const useFetchScore = (userId) => useFetch(`${API_CONFIG.userPath(userId)}`, `Score-${userId}`, (data) => {
    const scoreData = data?data.data:undefined
    return scoreData.score ?? scoreData.todayScore
})

const api = {
    // Spread operator. All methods templates are added to the api object.
    ...ApiTemplate,

    // The template method is replaced with the "real" API calls with useFetch
    useGetUser: useFetchUserProfile,

    useGetAverageSessions: useFetchAverageSessions,

    useGetPerformances: useFetchPerformances,

    useGetScore: useFetchScore,

    useGetKeyData: useFetchKeyData,

    useGetActivities: useFetchActivities,
}
export default api
