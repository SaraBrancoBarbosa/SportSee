import ApiTemplate from "./ApiTemplate"
import useFetch from "../../hooks/useFetch"

/***** Mocked API. The mocked data are in the public folder *****/

// Delay simulation for the mocked data only (dev mode)
const fetchDelay = 250

// The useFetch hook is used
const useFetchUserProfile = (userId) => useFetch("/data/mocked-data.json", `User-${userId}`, (data) =>
    data?data.mainData.find(user => ""+user.id === ""+userId):undefined
, fetchDelay)

const useFetchAverageSessions = (userId) => useFetch("/data/mocked-data.json", `Sessions-${userId}`, (data) => 
    data?data.averageSessions.find(user => ""+user.userId === ""+userId):undefined
, fetchDelay)

const useFetchPerformances = (userId) => useFetch("/data/mocked-data.json", `Performances-${userId}`, (data) => 
    data?data.userPerformance.find(user => ""+user.userId === ""+userId):undefined
, fetchDelay)

const useFetchKeyData = (userId) => useFetch("/data/mocked-data.json", `KeyData-${userId}`, (data) => 
    data?data.mainData.find(user => ""+user.id === ""+userId):undefined
, fetchDelay)

const useFetchActivities = (userId) => useFetch("/data/mocked-data.json", `Activities-${userId}`, (data) => 
    data?data.userActivity.find(user => ""+user.userId === ""+userId):undefined
, fetchDelay)

const useFetchScore = (userId) => useFetch("/data/mocked-data.json", `Score-${userId}`, (data) => { 
    const scoreData = data?data.mainData.find(user => ""+user.id === ""+userId):undefined
    return scoreData.score ?? scoreData.todayScore
}, fetchDelay)

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
