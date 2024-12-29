import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.jsx";

function Layout() {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>
                <Outlet />
            </main>

            <footer></footer>
        </>
    );
}

export default Layout;
