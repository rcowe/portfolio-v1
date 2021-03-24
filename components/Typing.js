import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
    return (
        <Typewriter
            options={{
                strings: [
                    "A software engineer with a focus on risk and security.",
                    "Problem Solver",
                    "MERN Stack Developer",
                    "Ruby on Rails Afficionado",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 30,
            }}
        />
    );
}

export default Type;
