import BackgroundImg from "./BackgroundImg.jsx";
import parse from 'html-react-parser'
import {useState} from "react";
import {useOutletContext} from "react-router-dom";
const crew=[
    ["COMMANDER","DOUGLAS HURLEY","Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.","crew/image-douglas-hurley.png"],
    ["MISSION SPECIALIST","MARK SHUTTLEWORTH","Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.","crew/image-mark-shuttleworth.png"],
    ["PILOT","VICTOR GLOVER","Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ","crew/image-victor-glover.png"],
    ["FLIGHT ENGINEER","ANOUSHEH ANSARI","Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ","crew/image-anousheh-ansari.png"]
]
export default function Crew(){
    const [selectedCrew,setSelectedCrew]=useState(0);
    let [[mobile,tablet]]=(useOutletContext());
    let s="desktop";
    if(mobile){
        s="mobile"
    }
    else if(tablet){
        s="tablet"
    }
    let url=`/crew/background-crew-${s}.jpg`;
    return(
        <>
            <BackgroundImg url={url}>
                {!mobile&&<div className="d-flex crew-margin">
                    <div className="crew-ps">
                        <div>
                            <p className="main-header marginL1half"><b className="crew-header-margin">02</b>MEET YOUR
                                CREW</p>
                            <div className="crew-p-box">
                                <p className="crew-p1">{crew[selectedCrew][0]}</p>
                                <p className="crew-p2">{crew[selectedCrew][1]}</p>
                                <p className="crew-p3">{crew[selectedCrew][2]}</p>
                            </div>
                        </div>
                        <div className="crew-slider-flex">
                            <div className="crew-slider-design">
                                <div className={selectedCrew === 0 ? "crew-slider white-bg" : "crew-slider crew-hover"}
                                     onClick={() => setSelectedCrew(0)}/>
                                <div className={selectedCrew === 1 ? "crew-slider white-bg" : "crew-slider crew-hover"}
                                     onClick={() => setSelectedCrew(1)}/>
                                <div className={selectedCrew === 2 ? "crew-slider white-bg" : "crew-slider crew-hover"}
                                     onClick={() => setSelectedCrew(2)}/>
                                <div className={selectedCrew === 3 ? "crew-slider white-bg" : "crew-slider crew-hover"}
                                     onClick={() => setSelectedCrew(3)}/>
                            </div>
                        </div>
                    </div>
                    {selectedCrew === 0 && <img className="crew-photo1" alt={crew[0][1]} src={crew[0][3]}/>}
                    {selectedCrew === 1 && <img className="paddingT14 crew-photo2" alt={crew[1][1]} src={crew[1][3]}/>}
                    {selectedCrew === 2 && <img className="paddingT14 crew-photo3" alt={crew[2][1]} src={crew[2][3]}/>}
                    {selectedCrew === 3 && <img className="paddingT14 crew-photo4" alt={crew[3][1]} src={crew[3][3]}/>}
                </div>}
                {mobile&&<div className="crew-mobile">
                    <p className="main-header marginL1half"><b className="crew-header-margin">02</b>MEET YOUR CREW</p>
                    <img className="crew-photo1" alt={crew[selectedCrew][1]} src={crew[selectedCrew][3]}/>
                    <div className="destination-hr crew-hr"/>
                    <div className="crew-slider-flex">
                        <div className="crew-slider-design">
                            <div className={selectedCrew === 0 ? "crew-slider white-bg" : "crew-slider crew-hover"}
                                 onClick={() => setSelectedCrew(0)}/>
                            <div className={selectedCrew === 1 ? "crew-slider white-bg" : "crew-slider crew-hover"}
                                 onClick={() => setSelectedCrew(1)}/>
                            <div className={selectedCrew === 2 ? "crew-slider white-bg" : "crew-slider crew-hover"}
                                 onClick={() => setSelectedCrew(2)}/>
                            <div className={selectedCrew === 3 ? "crew-slider white-bg" : "crew-slider crew-hover"}
                                 onClick={() => setSelectedCrew(3)}/>
                        </div>
                    </div>
                    <div className="crew-p-box">
                        <p className="crew-p1">{crew[selectedCrew][0]}</p>
                        <p className="crew-p2">{crew[selectedCrew][1]}</p>
                        <p className="crew-p3">{crew[selectedCrew][2]}</p>
                    </div>
                </div>}
            </BackgroundImg>
        </>
    )
}