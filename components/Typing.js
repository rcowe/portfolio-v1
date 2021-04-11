import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
    return (
        <Typewriter
            options={{
                strings: [
                    "A fullstack engineer with a focus on risk and security.",
                    "A problem solver",
                    "MERN Stack Developer",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 30,
            }}
        />
    );
}

export default Type;
