import { useEffect, useState } from "react"

/***** Custom hook to manage the data loading system *****/

const useFetch = (url, key, onLoaded=() => {}) => {
  
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [loaded, setLoaded] = useState(false)
    const [error, setError] = useState(null)
  
    // To reset the states (data, loading, loaded and error) with each URL or key change
    useEffect(() => {
        setError(null)
        setLoaded(false)
        setLoading(true)
    }, [url, key])

    useEffect(() => {
        // Launches only if loading is false, and if loaded is false
        if(loading || loaded) return

        // Async func inside useEffect
        const loadUsers = async() => {
                setTimeout(() => {
                    fetch(url)
                    .then(response => {
                        return response.json()
                    })
                    .then(data => {
                        // Formatting the retrieved data, stored in data
                        setData(onLoaded?onLoaded(data):data)
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
                }, 250)
        } 

        loadUsers()

    }, [url, loaded, loading, onLoaded])

    return {
        data,
        loading,
        loaded,
        error,
    }
}

export default useFetch