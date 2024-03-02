import React, { useEffect, useState, memo } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { COLORS, LAYOUTS, TYPOGRAPHY } from "../../../theme/theme";
import Input from "../../../components/Input";
import { SearchNormal1, ShoppingBag } from "iconsax-react-native";
import { useRouter } from "expo-router";

const ProductCard = ({ route }) => {
  return (
    <TouchableOpacity
      onPress={() => route.push("/store/1")}
      activeOpacity={0.9}
      style={{ flex: 1, width: "100%", marginBottom: 30 }}
    >
      <Image
        style={{
          flex: 1,
          resizeMode: "contain",
          maxHeight: 250,
          borderRadius: 20,
          marginBottom: -45,
          position: "relative",
          zIndex: 100
        }}
        source={{
          uri: "https://rukminim2.flixcart.com/image/850/1000/xif0q/protein-supplement/0/e/f/protein-bars-bar-daily-choco-classic-healthy-protein-snack-no-original-imagt2znwsznkku3.jpeg",
        }}
      />

      <View style={styles.card}>
        <Text style={TYPOGRAPHY.Card.Heading}>Max Protein Bar Pack of 6</Text>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 5,
          }}
        >
          <Text
            style={[
              TYPOGRAPHY.SubTitle,
              { fontFamily: "PlusJakartaSans_800ExtraBold" },
            ]}
          >
            Rs. 299
          </Text>
          <Text style={TYPOGRAPHY.Card.Muted}>In Stock</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const data = [
  { id: '1', name: 'Protien Bars', image: 'https://static.thcdn.com/productimg/1600/1600/12589808-1614823857888908.jpg' },
  { id: '2', name: 'PCO Workouts', image: 'https://images.squarespace-cdn.com/content/v1/587923fe86e6c07719f1b40c/1643140603725-TG32A9YTQE0Y5IP6UBRA/unsplash-image-lrQPTQs7nQQ.jpg' },
  { id: '3', name: 'Lab Tests', image: 'https://www.eehealth.org/-/media/images/modules/blog/posts/2020/11/lab-tests.jpg' },
];

const renderItem = ({ item }) => {
  return (
    <View style={styles.item}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.text}>{item.name}</Text>
    </View>
  );
}

export default () => {
  const route = useRouter();
  return (
    <SafeAreaView
      style={[
        LAYOUTS.flexCenter,
        LAYOUTS.screenView,
        { backgroundColor: COLORS.primaryLight, paddingBottom: 70 },
      ]}
    >
      <StatusBar style={"dark"} />

      <View style={{ marginBottom: 20 }}>
        <View
          style={[LAYOUTS.flexRowCenter, { justifyContent: "space-between" }]}
        >
          <Text style={[TYPOGRAPHY.Heading, { marginBottom: 10 }]}>
            Shop with ease!
          </Text>
          <ShoppingBag
            size="36"
            color="#000000"
            onPress={() => route.push("/store/cart")}
          />
        </View>
        <Input
          placeHolder={' Search for " Products " '}
          IconPrefix={SearchNormal1}
        />
      </View>

      <View style={{height: 120}}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>

      <ProductCard route={route} />
      {/* <ScrollView style={{ width: "100%", marginTop: 10 }}>
      </ScrollView> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: COLORS.primaryDark,
    borderRadius: 20,
    padding: 20,
    paddingTop: 50,
  },

  item: {
    marginVertical: 10,
    marginRight: 20,
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 60,
    resizeMode: 'cover',
    borderRadius: 20,
  },
  text: {
    marginTop: 5,
    fontSize: 16,
  },
});
