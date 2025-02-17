import ApiTemplate from "./ApiTemplate"
import useFetch from "../../hooks/useFetch"

// Api du Back. On utilise le fichier route.js pour se repérer

// Pour le futur déploiement de l'application. L'adresse du localhost:3000 se trouve dans le fichier .env
const API_CONFIG = {
    host: import.meta.env.VITE_HOST,
    userPath: (userId) => `${API_CONFIG.host}/user/${userId}`
} 

const useFetchUserProfile = (userId) => useFetch(`${API_CONFIG.userPath(userId)}`, userId, (data) =>
    data?data.data:undefined
)

const useFetchAverageSessions = (userId) => useFetch(`${API_CONFIG.userPath(userId)}/average-sessions`, userId, (data) =>
    data?data.data:undefined
)

const useFetchPerformances = (userId) => useFetch(`${API_CONFIG.userPath(userId)}/performance`, userId, (data) =>
    data?data.data:undefined
)

const useFetchKeyData = (userId) => useFetch(`${API_CONFIG.userPath(userId)}`, userId, (data) =>
    data?data.data:undefined
)

const useFetchActivities = (userId) => useFetch(`${API_CONFIG.userPath(userId)}/activity`, userId, (data) =>
    data?data.data:undefined
)

const useFetchScore = (userId) => useFetch(`${API_CONFIG.userPath(userId)}`, userId, (data) => {
    const scoreData = data?data.data:undefined
    return scoreData.score ?? scoreData.todayScore
})

const api = {
    ...ApiTemplate,

    useGetUser: useFetchUserProfile,

    useGetAverageSessions: useFetchAverageSessions,

    useGetPerformances: useFetchPerformances,

    useGetScore: useFetchScore,

    useGetKeyData: useFetchKeyData,

    useGetActivities: useFetchActivities,
}
export default api
