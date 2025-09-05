import React from "react";
import Typewriter from "typewriter-effect";
// import { selfIntroduction }  from "../../workhistory";

function Type() {
  // const { DevelopmentStack } = selfIntroduction.DevelopmentStack;
  return (
    <Typewriter
      options={{
        strings: [
          "FE Architect",
          "Software Developer",
          "AI/ML Engineer",
          "Native iOS Developer",
          "Native Android Developer",
          "Flutter Developer",
          "React Native Developer",
          "Fullstack Developer",
          "DevOps Engineer",
          "Freelancer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
