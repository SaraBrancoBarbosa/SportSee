import { useEffect, useState } from "react"

const useFetch = (url, key, onLoaded=() => {}) => {
  
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [loaded, setLoaded] = useState(false)
    const [error, setError] = useState(null)
  
    useEffect(() => {
        setError(null)
        setLoaded(false)
        setLoading(true)
    }, [url, key])

    useEffect(() => {
        if(loading || loaded) return

        // Async func inside useEffect
        const loadUsers = async() => {
                setTimeout(() => {
                    fetch(url)
                    .then(response => {
                        return response.json()
                    })
                    .then(data => {
                        // Formatage
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