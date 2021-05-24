import * as React from 'react';
import Svg, {G, Circle, Text} from 'react-native-svg';

function SvgComponent({height, width, color}) {
  return (
    <Svg
      style={{height: height, width: width}}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 30.1 30.1">
      <G data-name="Layer 2">
        <G data-name="Layer 1">
          <Circle cx={15.05} cy={15.05} r={15.05} fill={color} />
          <Text
            transform="translate(2.89 18.44)"
            fontSize={10}
            fill="#fff"
            fontFamily="MicrosoftSansSerif,Microsoft Sans Serif">
            {'SELL'}
          </Text>
        </G>
      </G>
    </Svg>
  );
}

export default SvgComponent;
