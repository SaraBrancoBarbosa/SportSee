import { useEffect, useState } from "react"

/***** Custom hook to manage the data fetching and loading system *****/

const useFetch = (url, key, onLoaded=() => {}, fetchDelay = 0) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [loaded, setLoaded] = useState(false)
    const [error, setError] = useState(null)
  
    // To reset the states (data, loading, loaded and error) with each URL or key change
    useEffect(() => {
        setError(null)
        setLoaded(false)
        setLoading(false)
    }, [url, key])

    useEffect(() => {
        // Launches only if loading is false, and if loaded is false
        if(loading || loaded) return

        if(!url) return

        // Async func inside useEffect
        const fetchData = async() => {
            setLoading(true)

            const fetchCallback = () => {
                fetch(url)
                .then(response => {
                    if (!response.ok) {throw new Error ("Erreur serveur")}
                    // First formatting => .json
                    return response.json()
                })
                .then(data => {
                    /***** 
                    The onLoaded function (callback) is called as soon as useFetch has finished loading
                    When returned, the data is formatted as wanted: each fetch will have different formatting, since each object is different
                    Then the function is returned with onLoaded which contains "data": its role is to standardise the data
                    *****/
                    setData(onLoaded?onLoaded(data):data)
                    setLoaded(true)
                    setLoading(false)
                })
                .catch((error) => {
                    console.log(error)
                    setError("Oh non une erreur !")
                    setLoading(false)
                })
            }
            /***** 
            If fetchDelay is > 0, then the fetch is delayed by a setTimeout, and the delay is applied before the fetch occurs
            It allows to simulate a loading time to test the user interface in dev mode
            When fetchDelay is not > 0, setTimeout will not be used and the fetch request occurs immediately.
            import.met.env.DEV allows to detect the environment: dev mode with mocked data (=> value: true) or prod mode with real data (=> value: false)
            *****/
            if(import.meta.env.DEV && !isNaN(fetchDelay) && fetchDelay > 0) {
                setTimeout(fetchCallback, fetchDelay)
            } else {
                fetchCallback()
            }
        } 

        fetchData()

    }, [url, loaded, loading, onLoaded, fetchDelay])

    return {
        data,
        loading,
        loaded,
        error,
    }
}

export default useFetch