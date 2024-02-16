import React from "react";
import { StatusBar } from "expo-status-bar";
import { FlatList, Text, View } from "react-native";
import { COLORS, LAYOUTS, TYPOGRAPHY } from "../../../theme/theme";
import { ArrowLeft2 } from "iconsax-react-native";
import QuantityButton from "../../../components/QuantityButtons";

import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { StyleSheet, Image } from "react-native";
import { ProteinBars } from "../../../Data";
import { Button } from "react-native";

export default function cart() {
  let totalAmount = 0;
  ProteinBars.forEach((item) => {
    totalAmount += item.price;
  });
  const route = useRouter();
  return (
    <SafeAreaView
      style={[
        LAYOUTS.flexCenter,
        LAYOUTS.screenView,
        {
          backgroundColor: COLORS.primaryLight,
          position: "relative",
          paddingBottom: 90,
        },
      ]}
    >
      <StatusBar style={"dark"} />
      <Text
        style={[TYPOGRAPHY.Card.Heading, { marginBottom: 10, fontSize: 15 }]}
      >
        Swipe Right to delete
      </Text>

      <FlatList
        data={ProteinBars}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={{
              flex: 1,
              width: "100%",
              flexDirection: "row",
              alignItems: "top",
              marginVertical: 10,
            }}
          >
            <Image
              style={{
                width: 80,
                height: 80,
                borderRadius: 20,
                marginRight: 10,
              }}
              source={{
                uri: item.image,
              }}
            />
            <View
              style={{
                justifyContent: "center",
                marginRight: "auto",
              }}
            >
              <Text
                style={[
                  TYPOGRAPHY.Card.Heading,
                  {
                    fontSize: 16,
                    maxWidth: 160
                  },
                ]}
              >
                {item.name}
              </Text>
              <Text
                style={[
                  TYPOGRAPHY.Header,
                  { textAlignVertical: "center", fontWeight: "800" },
                ]}
              >
                {`Rs.${item.price}`}
              </Text>
            </View>
            <QuantityButton />
          </View>
        )}
      />
      <View
        style={{
          justifyContent: "space-between",
          width: "100%",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <View style={{ justifyContent: "flex-start" }}>
          <Text style={TYPOGRAPHY.Body}>Total Amount</Text>
          <Text style={[TYPOGRAPHY.Heading]}>{`Rs. ${totalAmount}`}</Text>
        </View>
        <Button
          title="Checkout"
          style={{
            width: 200,
            height: 20,
            backgroundColor: COLORS.primary,
          }}
        ></Button>
      </View>
    </SafeAreaView>
  );
}
