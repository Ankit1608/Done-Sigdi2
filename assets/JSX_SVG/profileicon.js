import * as React from "react";
import Svg, { Defs, G, Circle, Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */

function SvgComponent({ height, width, color }) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 37.47 33.55"
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
          <Circle
            className="prefix__cls-1"
            cx={18.62}
            cy={9.75}
            r={9.25}
            transform="rotate(-45 18.618 9.748)"
            stroke={color}
            strokeWidth="2"
          />
          <Path className="prefix__cls-1" d="M.01 33.05h37.45" />
          <Path
            className="prefix__cls-2"
            d="M12.28 16.88a17.43 17.43 0 00-8 5.67A17.6 17.6 0 00.5 33.05M24.75 17A17.43 17.43 0 0137 33"
          />
        </G>
      </G>
    </Svg>
  );
}

export default SvgComponent;
