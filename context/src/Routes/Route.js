import { Outlet } from "react-router-dom"
import Header from "../Components/Header"
import MainPage from "../Pages/MainPage"
import CreatePage from "../Pages/CreatePage"
import EditPage from "../Pages/EditPage"
import UserContextProvider from "../Content/userContext"
import ThemeContextProvider from "../Content/themeContext"


const routes = [
    {
       element : (
        <div>
            <ThemeContextProvider>
            <Header/>
            <Outlet/>
            </ThemeContextProvider>
        </div>
       ),
       path: '/',
       children : [
        {
            element : (
                <div>
                    <UserContextProvider>
                    <MainPage />
                    </UserContextProvider>
                 </div>
                    
           ),
            index : true
        },
        {
            element : <CreatePage/>,
            path: 'create',
        },
        {
            element : <EditPage/>,
            path: 'edit/:id',

        },
        
       ]
    }
   
]

export default routes