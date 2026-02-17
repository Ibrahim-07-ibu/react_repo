import Apply from "../pages/Apply"
import MyAttendance from "../pages/MyAttendance"
import MyProfile from "../pages/MyProfile"

import MainLayout from "../layouts/mainLayout"

const mainRoutes = {
    path :"/",
    element: <MainLayout/>,
    Children: [
        {path:"/apply",
        element:<Apply/>
        },
        {path:"/myattendance",
        element:<MyAttendance/>
        },
        {path:"/myprofile",
        element:<MyProfile/>
        }
    ]
}

export default mainRoutes