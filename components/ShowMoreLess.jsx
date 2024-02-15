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
    return items.map((item, idx) => (
      <View
        key={idx}
        style={{
          marginBottom: 10,
          flexDirection: "row",
          justifyContent: "space-between",
          flex: 1,
          width: "100%"
        }}
      >
        <Text style={[TYPOGRAPHY.Card.Muted, { flex: 1, marginRight: "auto" }]}>{item.title}</Text>
        <Text
          style={{
            flex: 1,
            fontSize: 15,
            fontFamily: "PlusJakartaSans_600SemiBold",
            textAlign: "justify",
          }}
        >
          {item.data}
        </Text>
      </View>
    ));
  };

  return (
    <View>
      <View style={[LAYOUTS.flexCenter, { maxWidth: "100%", flexWrap: "wrap" }]}>
        {showMore ? renderGridItems(items) : renderGridItems(items.slice(0, 3))}
      </View>
      <TouchableOpacity
        onPress={() => setShowMore(!showMore)}
        style={{ alignItems: "flex-start" }}
      >
        <Text
          style={{
            marginTop: 6,
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
