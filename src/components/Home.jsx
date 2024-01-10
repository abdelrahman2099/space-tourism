import BackgroundImg from "./BackgroundImg.jsx";
import {useOutletContext} from "react-router-dom";
export default function Home(){
    let [[mobile,tablet]]=(useOutletContext());
    let s="desktop";
    if(mobile){
        s="mobile"
    }
    else if(tablet){
        s="tablet"
    }
    let url=`/home/background-home-${s}.jpg`;
    return(
        <BackgroundImg url={url}>
            <div className="body">
                <div className="body-in">
                    <p className="home-p1">SO, YOU WANT TO TRAVEL TO</p>
                    <p className="home-p2">SPACE</p>
                    <p className="home-p3">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
                </div>
                <div className="button">EXPLORE</div>
            </div>
        </BackgroundImg>
    );
}