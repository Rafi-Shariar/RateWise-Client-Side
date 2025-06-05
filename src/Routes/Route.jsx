import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import HomePage from "../Pages/HomePage";
import ServicesPage from "../Pages/ServicesPage";
import ServiceDetailsPage from "../Pages/ServiceDetailsPage";
import RegistrationPage from "../Pages/RegistrationPage";

const router = createBrowserRouter([
    {
        path:'/',
        element:<RootLayout></RootLayout>,
        children:[
            { index:true, element:<HomePage></HomePage>,
                loader: ()=> fetch('http://localhost:3000/services')
            },
            { path:'/services', element:<ServicesPage></ServicesPage>},
            { path:'/services/:id', element:<ServiceDetailsPage></ServiceDetailsPage>},
            { path:'/registration', element:<RegistrationPage></RegistrationPage>},
            { path:'/services/:id', element:<ServiceDetailsPage></ServiceDetailsPage>},
        ]
    }
])

export default router;