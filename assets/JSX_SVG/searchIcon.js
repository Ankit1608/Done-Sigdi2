import * as React from "react";
import Svg, { Defs, G, Path, Circle } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */

function SvgComponent({ height, width, color }) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 34.69 30.22"
      style={{ height: height, width: width }}
    >
      <Defs></Defs>
      <G id="prefix__Layer_2" data-name="Layer 2">
        <G
          id="prefix__Layer_1-2"
          data-name="Layer 1"
          stroke={color}
          strokeWidth="2"
        >
          <Path className="prefix__cls-1" d="M25.38 20.28" />
          <Circle
            className="prefix__cls-1"
            cx={12.61}
            cy={12.61}
            r={12.11}
            stroke={color}
            strokeWidth="2"
          />
          <Path className="prefix__cls-1" d="M21.26 21.09l8.5 8.78" />
        </G>
      </G>
    </Svg>
  );
}

export default SvgComponent;
