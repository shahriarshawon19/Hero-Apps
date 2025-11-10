import { createBrowserRouter } from "react-router"
import MainLayouts from "../layouts/MainLayouts"
import Home from "../pages/Home"
import AllApps from "../pages/AllApps"
import InstalledApps from "../pages/InstalledApps"


const router = createBrowserRouter([
    {
        path: '/',
        element:<MainLayouts/>,
        children:[
            {
                index:true,
                element:<Home/>,
            },
            {
                path:'/apps',
                element:<AllApps/>,
            },
            {
                path:'/installed',
                element:<InstalledApps/>,
            }
        ]
    },
])
export default router