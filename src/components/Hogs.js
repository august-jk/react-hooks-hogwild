import React, { useState } from "react";
import AdditionalHogContent from "./AdditionalHogContent";

function Hogs({ hogs }) {
    const [selectedPig, setSelectedPig] = useState("")
    function handleClick(hog) {
        setSelectedPig(() => {
            if(selectedPig === hog.name){
                return ""
            } else {return hog.name}
        });
    }
    const pigTile = hogs.map((hog) => {
        return(
        <div key={hog.name} className="pigTile" onClick={() => handleClick(hog)}>
            <h2>{hog.name}</h2>
            <img src={hog.image} alt=""/>
            {selectedPig === hog.name ? <AdditionalHogContent hog={hog}/> : null}
        </div>
        )
    })

    return(
        <div className="ui grid container">
            {pigTile}
        </div>
    )
}
export default Hogs;


