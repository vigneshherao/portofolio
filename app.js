import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
import path from "path";
import Projects from "./components/projects";
import Footer from "./components/Footer";
import { Certificate } from "crypto";
import Certificates from "./components/Cartificates";

const AppLayout = () =>{
    return (
        <div className="main">
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    )
}



const root = ReactDOM.createRoot(document.getElementById("root"));


const appRouter = createBrowserRouter([
    {
    path:"/",
    element:<AppLayout/>,
    children:[
        {
            path:"/project",
            element:<Projects/>
        },
        {
            path:"/",
            element:<Body/>
        },
        {
            path:"certificates",
            element:<Certificates/>
        }
    ]
    }
])

root.render(<RouterProvider router={appRouter}/>);