import React, { useState } from 'react'

function useRequest({url, method}) {
  const [loading, setloading] = useState(false)

  const sendrequest = async (body, custom) => {
    setloading(true)
    const res = await fetch(custom || url, {
        method,
        headers : {
          "Content-Type": "application/json",
          "Authorization": `Bearer r2ajJtqb66MZUe8eYiI2v_RpgIQmOZyq2M2GI7hGhxIeFdU7Iw`
        },
        body : !!body && method !== 'GET' ? JSON.stringify(body) : undefined
    })

    const data = await res.json()
    setloading(false)
    return data
  }

  return {sendrequest, loading}
}

export default useRequest