import { useState } from "react";

function ColorTest() {
    const [greenOrWhite] = useState(() => Math.floor(Math.random() * 10));
    console.log(greenOrWhite);

    return (
        <div>
            <h2>{greenOrWhite > 5 ? "Yes" : "No"}</h2>
        </div>
    )
}

export default ColorTest;