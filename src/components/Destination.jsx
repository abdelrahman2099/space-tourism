import BackgroundImg from "./BackgroundImg.jsx";
import {useState} from "react";
import {useOutletContext} from "react-router-dom";

const planets=[["/destination/image-moon.png","MOON","See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.","384,400 KM","3 DAYS"],
    ["/destination/image-mars.png","MARS","Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!","225 MIL. KM","9 MONTHS"],
    ["/destination/image-europa.png","EUROPA","The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.","628 MIL. KM","3 YEARS"],
    ["/destination/image-titan.png","TITAN","The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.","1.6 BIL. KM","7 YEARS"]
]


export default function Destination(){
    let [i,setI]=useState(0);
    let [[mobile,tablet]]=(useOutletContext());
    let s="desktop";
    if(mobile){
        s="mobile"
    }
    else if(tablet){
        s="tablet"
    }
    let url=`/destination/background-destination-${s}.jpg`;

    return(
        <BackgroundImg url={url}>
            <div className="destination-first">
                <div className="destination-second">
                    <div className="main-header"><b className="destination-header-margin">01</b>PICK YOUR DESTINATION</div>
                    <div className="destination-f">
                        <img className="destination-img" src={planets[i][0]} alt="moon"/>
                        <div className="destination-fp">
                            <div className="destination-p1">
                                <p className={i===0?"hovering destination-under-line":'destination-hovering destination-padding'} onClick={()=>setI(0)}>MOON</p>
                                <p className={i===1?"hovering destination-under-line":'destination-hovering destination-padding'} onClick={()=>setI(1)}>MARS</p>
                                <p className={i===2?"hovering destination-under-line":'destination-hovering destination-padding'} onClick={()=>setI(2)}>EUROPA</p>
                                <p className={i===3?"hovering destination-under-line":'destination-hovering destination-padding'} onClick={()=>setI(3)}>TITAN</p>
                            </div>
                            <p className="destination-p2">{planets[i][1]}</p>
                            <p className="destination-p3">{planets[i][2]}</p>
                            <div className="destination-hr"/>
                            <div className="d-flex mobile-home">
                                <div className="marginR79">
                                    <p className="destination-p4">AVG. DISTANCE</p>
                                    <p className="destination-p5">{planets[i][3]}</p>
                                </div>
                                <div>
                                    <p className="destination-p4">EST. TRAVEL TIME</p>
                                    <p className="destination-p5">{planets[i][4]}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </BackgroundImg>
    );
}