import React, { useState } from "react";

import { Text, View } from "react-native";
import { COLORS, LAYOUTS, TYPOGRAPHY } from "../theme/theme";
import { AddCircle, MinusCirlce } from "iconsax-react-native";

export default function QuantityButton() {
  const [count, setCount] = useState(1);

  const increment = () => {
    count === 6 ? setCount(6) : setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    count === 1 ? setCount(1) : setCount((prevCount) => prevCount - 1);
  };

  return (
    <View style={[LAYOUTS.flexRowCenter, { width: "fit-content" }]}>
      <MinusCirlce
        size={24}
        color={COLORS.primaryDark}
        style={{opacity: .8}}
        onPress={decrement}
      />
      <Text
        style={[
          TYPOGRAPHY.Display,
          { fontSize: 26, marginHorizontal: 10, textAlign: "center", verticalAlign: "top" },
        ]}
      >
        {count}
      </Text>
      <AddCircle
        size={24}
        color={COLORS.primaryDark}
        style={{opacity: .8}}
        onPress={increment}
      />
    </View>
  );
}
