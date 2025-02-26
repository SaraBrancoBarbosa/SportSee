/*****
Object: Templates for ApiBack and ApiMocked.
If ApiBack or ApiMocked wrongly use the methods, the errors secure the app
*****/

const ApiTemplate = {
    useGetUser:(id) => { console.log(id) ; throw new Error ("useGetUser must be implemented")},

    useGetAverageSessions:(id) => { console.log(id) ; throw new Error ("useGetAverageSessions must be implemented")},

    useGetPerformances:(id) => { console.log(id) ; throw new Error ("useGetPerformances must be implemented")},

    useGetScore:(id) => { console.log(id) ; throw new Error ("useGetScore must be implemented")},

    useGetKeyData:(id) => { console.log(id) ; throw new Error ("useGetKeyData must be implemented")},

    useGetActivities:(id) => { console.log(id) ; throw new Error ("useGetActivities must be implemented")},
}

export default ApiTemplate