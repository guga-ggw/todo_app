import React, { createContext, useCallback, useContext, useMemo } from 'react'
import useFetch from '../Hooks/useFetch'
import useRequest from '../Hooks/useRequest'

const UserContext = createContext(null)

const UserContextProvider = ({children}) => {

   const {data, fetchdata, loading:dataloading} = useFetch({url: "/api/v1/todos", method: "GET"})
   const {loading:updateloading, sendrequest} = useRequest({method: "DELETE"})

   const taskdelete = useCallback((id) => {
        sendrequest(null, `/api/v1/todos/${id}`).then(() => fetchdata())
   })

   const tasks = useMemo(() => {
    return data?.items.map(user => {
        return {
            task : user.task,
            id: user._uuid
        }
    }) || []
   },[data])

   const contextValue = useMemo(() => ({
        dataloading,
        updateloading,
        taskdelete,
        tasks
   }),[dataloading, updateloading, data, taskdelete])




    return <UserContext.Provider value={contextValue}>
        {children}
    </UserContext.Provider>
    
 
}
export const useUserContext = () => {
    const contextValue = useContext(UserContext)
    if(!contextValue) throw new Error('wrong contextprovider')

    return contextValue
}

export default UserContextProvider