import BackgroundImg from "./BackgroundImg.jsx";
import {useState} from "react";
import {useOutletContext} from "react-router-dom";
const technologies=[
    ["LAUNCH VEHICLE","A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!","/technology/image-launch-vehicle-portrait.jpg","/technology/image-launch-vehicle-landscape.jpg"],
    ["SPACEPORT","A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.","/technology/image-spaceport-portrait.jpg","/technology/image-spaceport-landscape.jpg"],
    ["SPACE CAPSULE","A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.","/technology/image-space-capsule-portrait.jpg","/technology/image-space-capsule-landscape.jpg"]
];
export default function Technology(){
    const [selectedTechnology,setSelectedTechnology]=useState(0);
    let [[mobile,tablet]]=(useOutletContext());
    let s="desktop";
    if(mobile){
        s="mobile"
    }
    else if(tablet){
        s="tablet"
    }
    let url=`/technology/background-technology-${s}.jpg`;
    return(
        <BackgroundImg url={url}>
            <div  className="technology-main">
                <p className="main-header marginL1half" ><b className="crew-header-margin">03</b>SPACE LAUNCH 101</p>
                <div className="technology-fb">
                    <div className="d-flex height304">
                        <div className="technology-slider-design">
                            <div className={selectedTechnology===0?"b-color technology-slider white-bg":"technology-slider  technology-hover"} onClick={()=>setSelectedTechnology(0)}>1</div>
                            <div className={selectedTechnology===1?"b-color technology-slider white-bg":"technology-slider  technology-hover"} onClick={()=>setSelectedTechnology(1)}>2</div>
                            <div className={selectedTechnology===2?"b-color technology-slider white-bg":"technology-slider  technology-hover"} onClick={()=>setSelectedTechnology(2)}>3</div>
                        </div>
                        <div className="marginL80">
                            <p className="technology-p1">THE TERMINOLOGY…</p>
                            <p className="technology-p2">{technologies[selectedTechnology][0]}</p>
                            <p className="technology-p3">{technologies[selectedTechnology][1]}</p>
                        </div>
                    </div>
                    <img className="technology-img" alt={technologies[selectedTechnology][0]} src={tablet||mobile?technologies[selectedTechnology][3]:technologies[selectedTechnology][2]}/>
                </div>
            </div>
        </BackgroundImg>
    )
}