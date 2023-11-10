
import "swiper/css";
import "./MainLayout.css";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Componentes/Footer/Footer";
import { useEffect } from "react";


const MainLayout = () => {
    const location = useLocation();

    useEffect(() => {
        if(location.pathname === "/") {
            document.title = "Genesis | Home"
            return;
        }
        document.title = "Genesis " + location.pathname.replace("/", "| ");
    }, [location.pathname])

    return (
        <div className="overflow-hidden">
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;