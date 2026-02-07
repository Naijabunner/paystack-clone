// ** @jsxImportSource @emotion/react */
import MapSvg from "@/components/map-svg";
import React from "react";

import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const floatingMap = keyframes`
  0% {
    transform: translate(0px, 0px);
  }
  25% {
    transform: translate(12px, -6px);
  }
  50% {
    transform: translate(24px, 0px);
  }
  75% {
    transform: translate(12px, 6px);
  }
  100% {
    transform: translate(0px, 0px);
  }
`;

const AnimatedMap = styled.div`
    height: 100%;
   //keyframes
   animation: ${floatingMap} 18s ease-in-out infinite;
   will-change: transform;
`;

const HeroBackgroundMap = () => {
    return (
        <div className="absolute bottom-0 top-0 flex justify-center items-center max-sm:-top-72 right-0 h-full rounded-l-[50%] rounded-[50%] max-w-237.5 overflow-hidden ">
            {/* Slow floating effect */}
            <AnimatedMap
            className="h-full translate-x-9 translate-y-15 z-30">
                <MapSvg />
            </AnimatedMap>
        </div>
    );
};

export default HeroBackgroundMap;
