import React from "react";
import Typewriter from "typewriter-effect";
// import { selfIntroduction }  from "../../workhistory";

function Type() {
  // const { DevelopmentStack } = selfIntroduction.DevelopmentStack;
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer",
          "Native iOS Developer",
          "Native Android Developer",
          "Fullstack Developer",
          "Flutter Developer",
          "React Native Developer",
          "Open Source Contributor",
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
