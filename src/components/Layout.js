import React from "react";
import { Outlet } from "react-router";
import Body from "../elements/Body/Body";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

export default function Layout(){
    return(
        <>
        <Navbar/>
        <Body>
            <Outlet/>
        </Body>
        <Footer/>
        </>
    );
}