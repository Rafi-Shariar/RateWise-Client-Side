import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import HomePage from "../Pages/HomePage";
import ServicesPage from "../Pages/ServicesPage";

const router = createBrowserRouter([
    {
        path:'/',
        element:<RootLayout></RootLayout>,
        children:[
            { index:true, element:<HomePage></HomePage>},
            { path:'/services', element:<ServicesPage></ServicesPage>}
        ]
    }
])

export default router;