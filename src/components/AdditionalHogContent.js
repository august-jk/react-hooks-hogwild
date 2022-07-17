import React from "react";

function AdditionalHogContent({ hog }) {
    return(
         <ul >
            <li>Speacialty: {hog.specialty}</li>
            <li>Greased? {hog.greased ? "Yes" : "No"}</li>
            <li>Weight: {hog.weight}</li>
            <li>Highest Medal Achieved: {}</li>
        </ul>
    )
}
export default AdditionalHogContent;