import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import HomePage from "../Pages/HomePage";
import ServicesPage from "../Pages/ServicesPage";
import ServiceDetailsPage from "../Pages/ServiceDetailsPage";
import RegistrationPage from "../Pages/RegistrationPage";
import LoginPage from "../Pages/LoginPage";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AddServicesPage from "../Pages/AddServicesPage";
import MyServicesPage from "../Pages/MyServicesPage";
import MyReviewsPage from "../Pages/MyReviewsPage";

const router = createBrowserRouter([
    {
        path:'/',
        element:<RootLayout></RootLayout>,
        children:[
            { index:true, element:<HomePage></HomePage>,
                loader: ()=> fetch('http://localhost:3000/services')
            },
            { path:'/services', element:<ServicesPage></ServicesPage>,
                loader: ()=> fetch('http://localhost:3000/allservices')
            },
            { path:'/services/:id', element:<ServiceDetailsPage></ServiceDetailsPage>,
                loader:({params})=> fetch(`http://localhost:3000/services/${params.id}`)
            },
            { path:'/registration', element:<RegistrationPage></RegistrationPage>},
            { path:'/login', element:<LoginPage></LoginPage>},
            { path:'/addservices', element:<PrivateRoute><AddServicesPage></AddServicesPage></PrivateRoute>},
            { path:'/myservices', element:<PrivateRoute><MyServicesPage></MyServicesPage></PrivateRoute>},
            { path:'/myreviews', element:<PrivateRoute><MyReviewsPage></MyReviewsPage></PrivateRoute>},
        ]
    }
])

export default router;