import { Outlet } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./footer";

export const Layout = () => {
    return (
        <>
            <Navbar />
            <div className="flex flex-col min-h-screen items-center">
                <main>
                    <Outlet />
                </main>
            </div>
            <Footer />
        </>
    );
};