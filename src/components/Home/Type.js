import React from "react";
import Typewriter from "typewriter-effect";
// import { selfIntroduction }  from "../../workhistory";

function Type() {
  // const { DevelopmentStack } = selfIntroduction.DevelopmentStack;
  return (
    <Typewriter
      options={{
        strings: [
          "Mobile Architect",
          "iOS & Android Developer",
          "Flutter & React Native Specialist",
          "Frontend Architect",
          "Fullstack Developer",
          "Team Lead & Mentor",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
