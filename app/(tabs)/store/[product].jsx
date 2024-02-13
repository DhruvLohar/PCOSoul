import React, { useState } from "react";

import { Text, View, ScrollView, Image, TouchableOpacity } from "react-native";
import { COLORS, LAYOUTS, TYPOGRAPHY } from "../../../theme/theme";
import { ArrowLeft2, AddCircle, MinusCirlce } from "iconsax-react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import ShowMoreLess from "../../../components/ShowMoreLess";

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
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const data = [
    { id: "1", title: "Flavour", data: "Choco Classic" },
    { id: "2", title: "Quantity", data: "300gm" },
    { id: "3", title: "maximum shell life", data: "275 days" },
    { id: "4", title: "Item 4", data: "here there'll be the data" },
  ];

  const route = useRouter();
  return (
    <SafeAreaView
      style={[
        LAYOUTS.flexCenter,
        LAYOUTS.screenView,
        { backgroundColor: COLORS.primaryLight, paddingBottom: 90 },
      ]}
    >
      <ScrollView>
        <Text
          style={[TYPOGRAPHY.Heading, { marginLeft: -10 }]}
          onPress={() => {
            route.back();
          }}
        >
          <ArrowLeft2 size="32" color={COLORS.primaryDark} />
          ProteinBars
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
            {
              justifyContent: "space-between",
              marginTop: 10,
            },
          ]}
        >
          {Images.map((image, idx) => {
            return (
              <TouchableOpacity key={idx} onPress={() => setLargeImage(image.imageUrl)}>
                <Image
                  style={{
                    marginHorizontal: 5,
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
        <View
          style={[LAYOUTS.flexRowCenter, { justifyContent: "space-between" }]}
        >
          <Text style={[TYPOGRAPHY.Heading, { fontSize: 30 }]}>Rs. 299</Text>
          <View style={[LAYOUTS.flexRowCenter, { width: "fit-content" }]}>
            <AddCircle
              size="32"
              color="#000000"
              variant="Outline"
              onPress={increment}
            />
            <Text
              style={[
                TYPOGRAPHY.Display,
                { fontSize: 30, marginHorizontal: 10, textAlign: "justify" },
              ]}
            >
              {count}
            </Text>
            <MinusCirlce
              size="32"
              color="#000000"
              variant="Outline"
              onPress={decrement}
            />
          </View>
        </View>
        <Text style={[TYPOGRAPHY.Card.Muted, { marginTop: 20, flex: 1 }]}>
          RiteBite Daily Choco Classic bar is made from tasty and delightful
          chocolate to make everyday more pleasant. It is the perfect bar for
          daily consumption whenever you need a boost Need to quell small
          hungers? This bar has just the balanced mix nutrients to keep you
          going This bar has sufficient protein (10gm) and fiber (4gm) to fill
          your daily nutritional gap This prebiotic bar is 100% vegetarian and
          contains 21 Vitamins & Minerals, Electrolytes, Omega 3 You can even
          consume it before your yoga sessions.
        </Text>

        <Text style={[TYPOGRAPHY.Heading, { marginVertical: 25 }]}>
          Product Info
        </Text>
        <ShowMoreLess items={data} />
      </ScrollView>
    </SafeAreaView>
  );
};
