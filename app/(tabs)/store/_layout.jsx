import { Stack } from "expo-router";
import TopHeader from "../../../shared/TopHeader"

export default function _layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen name="[product]"
        options={{
          headerShown: true,
          header: ({ route }) => <TopHeader title={"Cereal Bars"} />
        }}
      />

      <Stack.Screen name="cart"
        options={{
          headerShown: true,
          header: ({ route }) => <TopHeader title={"Your Cart"} />
        }}
      />
    </Stack>
  );
}
