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
import PageNotFound from "../Pages/PageNotFound";
import AboutUsPage from "../Pages/AboutUsPage";
import ContactPage from "../Pages/ContactPage";
const router = createBrowserRouter([
    {
        path:'/',
        element:<RootLayout></RootLayout>,
        children:[
            { index:true, element:<HomePage></HomePage>,
                loader: ()=> fetch('https://ratewise-seven.vercel.app/services')
            },
            { path:'/services', element:<ServicesPage></ServicesPage>
                
            },
            { path:'/services/:id', element:<ServiceDetailsPage></ServiceDetailsPage>,
                loader:({params})=> fetch(`https://ratewise-seven.vercel.app/services/${params.id}`)
            },
            { path:'/registration', element:<RegistrationPage></RegistrationPage>},
            { path:'/login', element:<LoginPage></LoginPage>},
            { path:'/aboutus', element:<AboutUsPage></AboutUsPage>},
            { path:'/contact', element:<ContactPage></ContactPage>},
            { path:'/addservices', element:<PrivateRoute><AddServicesPage></AddServicesPage></PrivateRoute>},
            { path:'/myservices', element:<PrivateRoute><MyServicesPage></MyServicesPage></PrivateRoute>},
            { path:'/myreviews', element:<PrivateRoute><MyReviewsPage></MyReviewsPage></PrivateRoute>},
            { path:'/*', element:<PageNotFound></PageNotFound>},
            
        ]
    },
    {
        path:'*',
        element:<PageNotFound></PageNotFound>
    },
])

export default router;