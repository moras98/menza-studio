import React from "react";
import { Outlet } from "react-router";
import Body from "../elements/Body/Body";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import MobileNavbar from "./MobileNavbar/MobileNavbar";

export default function Layout(){
    return(
        <>
        <Navbar/>
        <MobileNavbar/>
        <Body>
            <Outlet/>
        </Body>
        <Footer/>
        </>
    );
}