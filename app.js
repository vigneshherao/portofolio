import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
import path from "path";
import Projects from "./components/projects";
import Footer from "./components/Footer";

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
        }
    ]
    }
])

root.render(<RouterProvider router={appRouter}/>);