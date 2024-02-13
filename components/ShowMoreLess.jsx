import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import { useState } from "react";
import { COLORS, LAYOUTS, TYPOGRAPHY } from "../theme/theme";

export default ShowMoreShowLess = ({ items }) => {
  const [showMore, setShowMore] = useState(false);

  const renderGridItems = (items) => {
    return items.map((item) => (
      <View
        key={item.id}
        style={{
          marginVertical: 5,
          flexDirection: "row",
          justifyContent: "space-between",
          flex: 1,
        }}
      >
        <Text style={[TYPOGRAPHY.Card.Muted, { flex: 1 }]}>{item.title}</Text>
        <Text
          style={{
            flex: 1,
            fontSize: 15,
            fontFamily: "PlusJakartaSans_600SemiBold",
            textAlign: "left",
          }}
        >
          {item.data}
        </Text>
      </View>
    ));
  };

  return (
    <View>
      <View style={[LAYOUTS.flexCenter, { flexWrap: "wrap" }]}>
        {showMore ? renderGridItems(items) : renderGridItems(items.slice(0, 3))}
      </View>
      <TouchableOpacity
        onPress={() => setShowMore(!showMore)}
        style={{ alignItems: "flex-start" }}
      >
        <Text
          style={{
            fontSize: 15,
            fontFamily: "PlusJakartaSans_600SemiBold",
            textDecorationLine: "underline",
          }}
        >
          {showMore ? "Show Less..." : "Show More..."}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
