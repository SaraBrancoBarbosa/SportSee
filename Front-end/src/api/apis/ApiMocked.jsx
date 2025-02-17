import ApiTemplate from "./ApiTemplate"
import useFetch from "../../hooks/useFetch"

const useFetchUserProfile = (userId) => useFetch("/data/mocked-data.json", "User", (data) =>
    data?data.mainData.find(user => ""+user.id === ""+userId):undefined
)

const useFetchAverageSessions = (userId) => useFetch("/data/mocked-data.json", "Sessions", (data) => 
    data?(data.averageSessions?.find(user => ""+user.userId === ""+userId)):undefined
)

const useFetchPerformances = (userId) => useFetch("/data/mocked-data.json", "Performances", (data) => 
    data?(data.userPerformance?.find(user => ""+user.userId === ""+userId)):undefined
)

const useFetchKeyData = (userId) => useFetch("/data/mocked-data.json", "KeyData", (data) => 
    data?data.mainData.find(user => ""+user.id === ""+userId):undefined
)

const useFetchActivities = (userId) => useFetch("/data/mocked-data.json", "Activities", (data) => 
    data?(data.userActivity?.find(user => ""+user.userId === ""+userId)):undefined
)

const useFetchScore = (userId) => useFetch("/data/mocked-data.json", "Score", (data) => { 
    const scoreData = data?data.mainData.find(user => ""+user.id === ""+userId):undefined
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
