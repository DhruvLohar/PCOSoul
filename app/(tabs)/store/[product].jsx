import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { COLORS, LAYOUTS, TYPOGRAPHY } from "../../../theme/theme";

import Input from "../../../components/Input";
import Button from "../../../components/Button";

import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

const Images = [
  {
    imageUrl:
      "https://rukminim2.flixcart.com/image/850/1000/xif0q/protein-supplement/0/e/f/protein-bars-bar-daily-choco-classic-healthy-protein-snack-no-original-imagt2znwsznkku3.jpeg",
  },
  {
    imageUrl:
      "https://rukminim2.flixcart.com/image/850/1000/xif0q/protein-supplement/0/e/f/protein-bars-bar-daily-choco-classic-healthy-protein-snack-no-original-imagt2znwsznkku3.jpeg",
  },
  {
    imageUrl:
      "https://rukminim2.flixcart.com/image/850/1000/xif0q/protein-supplement/0/e/f/protein-bars-bar-daily-choco-classic-healthy-protein-snack-no-original-imagt2znwsznkku3.jpeg",
  },
  {
    imageUrl:
      "https://maxprotein.in/cdn/shop/products/3_6799c4fd-f423-4a09-96ff-bb1f83eaaeab.jpg?v=1677498307",
  },
];

//static sources for the images right now

export default () => {
  const url =
    "https://rukminim2.flixcart.com/image/850/1000/xif0q/protein-supplement/0/e/f/protein-bars-bar-daily-choco-classic-healthy-protein-snack-no-original-imagt2znwsznkku3.jpeg";

  const [largeImage, setLargeImage] = useState(url);

  const route = useRouter();
  return (
    <SafeAreaView
      style={[
        LAYOUTS.flexCenter,
        LAYOUTS.screenView,
        { backgroundColor: COLORS.primaryLight, position: "relative" },
      ]}
    >
      <StatusBar style={"dark"} />
      <ScrollView>
        <Text
          style={[TYPOGRAPHY.Heading]}
          onPress={() => {
            route.back();
          }}
        >
          {"< ProteinBars"}
        </Text>
        <Text style={[TYPOGRAPHY.Card.Muted, { marginTop: 5 }]}>
          1,122 Ratings and 8 Reviews
        </Text>
        <Image
          style={{
            width: 330,
            height: 270,
            marginTop: 5,
            resizeMode: "contain",
            borderRadius: 20,
          }}
          source={{
            uri: largeImage,
          }}
        />
        <View
          style={[
            LAYOUTS.flexRowCenter,
            { justifyContent: "space-between", marginTop: 10 },
          ]}
        >
          {Images.map((image, idx) => {
            return (
              <TouchableOpacity key={idx} onPress={() => setLargeImage(image.imageUrl)}>
                <Image
                  style={{
                    marginHorizontal: 7,
                    width: 60,
                    height: 60,
                    resizeMode: "contain",
                    borderRadius: 7,
                  }}
                  source={{ uri: image.imageUrl }}
                />
              </TouchableOpacity>
            );
          })}
        </View>

        <Text style={[TYPOGRAPHY.Card.Heading, { marginVertical: 25 }]}>
          Max Protein Bar Pack of 6 ( 6 x 10)
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};
