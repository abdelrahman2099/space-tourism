import {Outlet, useLocation} from "react-router-dom";
import Header from "../components/Header.jsx";
import {useEffect, useState} from "react";

export default function RootLayout(){
    const [isMobile, setIsMobile] = useState(window.innerWidth<=375)
    const [isTablet, setIsTablet] = useState(window.innerWidth<=768)

    const handleResize = () => {
        if (window.innerWidth <= 375) {
            setIsMobile(true);
            setIsTablet(false);
        }else if(window.innerWidth<=768){
            setIsTablet(true);
            setIsMobile(false);
        }
        else {
            setIsTablet(false);
            setIsMobile(false);
        }
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize)
    })
    const access = useLocation();
    return(
        <>
            <Header access={access.pathname} isMobile={isMobile} isTablet={isTablet}/>
            <Outlet context={[[isMobile,isTablet]]}/>
        </>
    )
}