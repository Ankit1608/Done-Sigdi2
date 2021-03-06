import * as React from "react";
import Svg, { Defs, G, Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */

function SvgComponent({ height, width, color }) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 29.57 38.85"
      style={{ height: height, width: width }}
    >
      <Defs></Defs>
      <G id="prefix__Layer_2" data-name="Layer 2">
        <G id="prefix__Layer_1-2" data-name="Layer 1">
          <Path
            stroke={color}
            strokeWidth="2"
            className="prefix__cls-1"
            d="M2.41 8.49L.5 34.73a3.8 3.8 0 001.16 2.59 3.84 3.84 0 002.65 1h21.23a3.36 3.36 0 002.71-1 3.22 3.22 0 00.82-2.14l-2-26.73z"
          />
          <Path
            stroke={color}
            strokeWidth="0.75"
            d="M17.54 16.78V20.56A1.63 1.63 0 0115.82 22h-.1c0 .3 0 .6.06.93 0 .53.07 1.06.13 1.59.07.8.14 1.62.2 2.42 0 .56.1 1.16.14 1.72.06.83.13 1.63.19 2.45a1.15 1.15 0 01-1 1.13 1.57 1.57 0 01-1.89-.8 1.35 1.35 0 010-.53c.06-.86.13-1.75.2-2.61.06-1 .16-2 .23-3.05.06-.86.13-1.75.2-2.62a5.3 5.3 0 01.06-.63c-.16 0-.3 0-.43-.06a1.51 1.51 0 01-1.46-1.36v-3.96a.33.33 0 01.37-.33.32.32 0 01.36.33v3.94c0 .53.47.89 1.16.89h1.46c.7 0 1.16-.36 1.16-.89v-3.91c0-.1 0-.23.16-.26.15.13.35.26.52.39z"
          />
          <Path
            stroke={color}
            strokeWidth="0.5"
            d="M17.53 16.83c-.2-.13-.36-.29-.56-.43.17-.13.5-.1.56.1a.91.91 0 010 .33zM16 20.3a1.88 1.88 0 01-.7-.6 1.51 1.51 0 01-.16-.93 3.51 3.51 0 01.33-.83 2.16 2.16 0 00.16-.59 1.61 1.61 0 00-.13-.8.62.62 0 01-.07-.26.2.2 0 00.14.06 1.58 1.58 0 01.66 1 1.66 1.66 0 01-.1.79c-.07.2-.17.43-.26.63a1.23 1.23 0 000 1.23 1.94 1.94 0 01.13.3zM14.52 20.3a1.85 1.85 0 01-.69-.6 1.19 1.19 0 01-.17-.93 6.76 6.76 0 01.3-.83 1.88 1.88 0 00.17-.59 1.74 1.74 0 00-.14-.8 1.16 1.16 0 00-.06-.26.16.16 0 00.13.06 1.54 1.54 0 01.63 1 1.66 1.66 0 01-.1.79 5.28 5.28 0 01-.27.6 1.34 1.34 0 00.07 1.26 1.3 1.3 0 00.13.3z"
          />
          <Path
            stroke={color}
            strokeWidth="2"
            className="prefix__cls-1"
            d="M8.05 12.06C7.38 5.29 12 .36 15.81.5s7.87 5.14 7.09 11.63"
          />
        </G>
      </G>
    </Svg>
  );
}

export default SvgComponent;
