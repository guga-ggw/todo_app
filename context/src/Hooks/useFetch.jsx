import React, { useCallback, useEffect, useState } from 'react'

function useFetch({url, method}) {
    const [data, setdata] = useState()
    const [loading, setloading] = useState(true)
    
    const fetchdata = useCallback(() => {
        setloading(true)
        fetch(url, {
            method,
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer r2ajJtqb66MZUe8eYiI2v_RpgIQmOZyq2M2GI7hGhxIeFdU7Iw`
            }
        })
        .then((res => {
            if(res.ok == true) return res.json()
        }) 
        ).then(res => setdata(res))
        .catch(err => console.log(err))
        .finally(setloading(false))

        return () => {
            setdata(null)
            setloading(false)
        }
    }, [url,method])

    useEffect(() => {
        fetchdata()
    },[fetchdata])

    return {fetchdata, data, loading}

}

export default useFetch