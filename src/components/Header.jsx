import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";

export default function Header({access,isMobile,isTablet}){
    const [menu,setMenu]=useState(false);
    const navigate = useNavigate();
    return(
        <>
            <div className="header">
                <img className="mobile-header" alt="logo" src="/shared/logo.svg"/>
                <div className="line"/>
                {!menu&&<div onClick={()=>setMenu(!menu)} className="menu-icon"/>}
                {!isMobile&&<div className="header-in">
                    <div className={((access==="/home")||(access==="/"))?"hovering header-under-line":"header-hovering header-padding"} onClick={()=>navigate('/home')}>{!isTablet&&<b className="marginR9">00</b>}HOME</div>
                    <div className={access==="/destination"?"hovering header-under-line":"header-hovering header-padding"} onClick={()=>navigate('/destination')}>{!isTablet&&<b className="marginR12">01</b>}DESTINATION</div>
                    <div className={access==="/crew"?"hovering header-under-line":"header-hovering header-padding"} onClick={()=>navigate('/crew')}>{!isTablet&&<b className="marginR10">02</b>}CREW</div>
                    <div className={access==="/technology"?"hovering header-under-line":"header-hovering header-padding"} onClick={()=>navigate('/technology')}>{!isTablet&&<b className="marginR10">03</b>}TECHNOLOGY</div>
                </div>}
            </div>
            {menu&&isMobile&&<div className="menu-design">
                <div className="close-icon" onClick={()=>setMenu(false)}/>
                <div className="menu">
                    <div className={((access==="/home")||(access==="/"))?"hovering header-under-line":"header-hovering header-padding"} onClick={()=>navigate('/home')}>{<b className="marginR9">00</b>}HOME</div>
                    <div className={access==="/destination"?"hovering header-under-line":"header-hovering header-padding"} onClick={()=>navigate('/destination')}>{<b className="marginR12">01</b>}DESTINATION</div>
                    <div className={access==="/crew"?"hovering header-under-line":"header-hovering header-padding"} onClick={()=>navigate('/crew')}>{<b className="marginR10">02</b>}CREW</div>
                    <div className={access==="/technology"?"hovering header-under-line":"header-hovering header-padding"} onClick={()=>navigate('/technology')}>{<b className="marginR10">03</b>}TECHNOLOGY</div>
                </div>
            </div>}
        </>
    );
}