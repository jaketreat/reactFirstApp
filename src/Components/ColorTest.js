import { useState } from "react";

function ColorTest() {
    const [greenOrWhite] = useState(() => Math.floor(Math.random() * 10));
    console.log(greenOrWhite);
    
    const colorInfo = {
        green: { answer: "Green", className: "greenHead" },
        white: { answer: "White", className: "whiteHead"}
    }

    const choice = greenOrWhite >= 5 ? "green" : "white";

    return (
        <div>
            <h2 className="whiteHead">Click the <span className={colorInfo[choice].className}>{colorInfo[choice].answer}</span> logo.</h2>
        </div>
    )
}

export default ColorTest;