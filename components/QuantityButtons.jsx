import React, { useState } from "react";

import { Text, View } from "react-native";
import { LAYOUTS, TYPOGRAPHY } from "../theme/theme";
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
      <AddCircle
        size="28"
        color="#000000"
        variant="Outline"
        onPress={increment}
      />
      <Text
        style={[
          TYPOGRAPHY.Display,
          { fontSize: 28, marginHorizontal: 10, textAlign: "justify" },
        ]}
      >
        {count}
      </Text>
      <MinusCirlce
        size="28"
        color="#000000"
        variant="Outline"
        onPress={decrement}
      />
    </View>
  );
}
