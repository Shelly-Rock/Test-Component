import { Outlet } from "react-router-dom"
import Header from "./header/Header.jsx";
import "./MainLayout.css";

export default function MainLayout (){
    return(
        <>
            <Header/>
            <div className="container-mainLayout">
                            <Outlet/>
            </div>
        </>
    )
}