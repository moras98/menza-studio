import React from "react";
import { Outlet } from "react-router";
import Body from "../elements/Body";

export default function Layout(){
    return(
        <>
        {/* NavBar */}
        <Body>
            <Outlet/>
        </Body>
        {/* Footer */}
        </>
    );
}