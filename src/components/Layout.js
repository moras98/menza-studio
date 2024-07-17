import React from "react";
import { Outlet } from "react-router";
import Body from "../elements/Body";
import Navbar from "./Navbar";

export default function Layout(){
    return(
        <>
        <Navbar/>
        <Body>
            <Outlet/>
        </Body>
        {/* Footer */}
        </>
    );
}