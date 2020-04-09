import Home from "./pages/Home/Home.jsx"
import Software from "./pages/Software/Software.jsx"
import Service from "./pages/Service/Service"
import Contact from "./pages/Contact/Contact"
import OtherProduct from "./pages/OtherProduct/OtherProduct"
import React from "react"
const routes = [
    {
        path: "/home",
        component: <Home />
    },
    {
        path: "/software",
        component: <Software />
    },
    {
        path: "/service",
        component: <Service />
    },
    {
        path: "/contact",
        component: <Contact />
    },
    {
        path: "/product",
        component: <OtherProduct />
    }

]
export default routes
