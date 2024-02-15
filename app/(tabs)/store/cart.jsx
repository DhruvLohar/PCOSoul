import React from "react";
import { StatusBar } from "expo-status-bar";
import { FlatList, Text, View } from "react-native";
import { COLORS, LAYOUTS, TYPOGRAPHY } from "../../../theme/theme";
import { ArrowLeft2 } from "iconsax-react-native";
import QuantityButton from "../../../components/QuantityButtons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { Image } from "react-native";
import { ProteinBars } from "../../../Data";
import Button from "../../../components/Button";
export default function cart() {
  const Datalength = ProteinBars.length;
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
          paddingBottom: 85,
        },
      ]}
    >
      <StatusBar style={"dark"} />
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <ArrowLeft2
          size="32"
          color={COLORS.primaryDark}
          onPress={() => {
            route.back();
          }}
        />
        <Text
          style={TYPOGRAPHY.Heading}
          onPress={() => {
            route.back();
          }}
        >
          Cart
        </Text>
      </View>
      <Text
        style={[TYPOGRAPHY.Card.Heading, { marginVertical: 5, fontSize: 15 }]}
      >
        Swipe Right to delete
      </Text>

      <FlatList
        data={ProteinBars}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={{
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
                width: 120,
                justifyContent: "center",
                marginRight: 20,
              }}
            >
              <Text
                style={[
                  TYPOGRAPHY.Card.Body,
                  {
                    fontSize: 15,
                    textAlignVertical: "center",
                    fontWeight: "700",
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
          title={
            <View style={LAYOUTS.flexRowCenter}>
              <Text
                style={[
                  TYPOGRAPHY.Card.Body,
                  {
                    fontSize: 20,
                    marginBottom: 7,
                    marginLeft: -18,
                    marginRight: 5,
                  },
                ]}
              >
                Checkout
              </Text>
              <Text
                style={{
                  width: 30,
                  borderRadius: 20,
                  height: 30,
                  backgroundColor: "black",
                  color: COLORS.primary,
                  textAlignVertical: "center",
                  textAlign: "center",
                }}
              >
                {Datalength}
              </Text>
            </View>
          }
          style={{
            backgroundColor: COLORS.primary,
            width: 170,
            height: 50,
          }}
        ></Button>
      </View>
    </SafeAreaView>
  );
}
