import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { COLORS, LAYOUTS, TYPOGRAPHY } from '../../../theme/theme';
import Input from "../../../components/Input"
import { SearchNormal1 } from 'iconsax-react-native';

const ProductCard = () => {
  return (
    <TouchableOpacity onPress={() => console.log("smthn")} activeOpacity={0.9} style={{ width: "100%", marginBottom: 30 }}>
      <View style={styles.card}>
        <Text style={TYPOGRAPHY.Card.Heading}>Max Protein Bar Pack of 6</Text>

        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 5 }}>
          <Text style={[TYPOGRAPHY.SubTitle, { fontFamily: "PlusJakartaSans_800ExtraBold" }]}>Rs. 299</Text>
          <Text style={TYPOGRAPHY.Card.Muted}>In Stock</Text>
        </View>
        <Image style={{ flex: 1, resizeMode: "contain", maxHeight: 200, borderRadius: 20 }} source={{
          uri: "https://rukminim2.flixcart.com/image/850/1000/xif0q/protein-supplement/0/e/f/protein-bars-bar-daily-choco-classic-healthy-protein-snack-no-original-imagt2znwsznkku3.jpeg?q=90&crop=false"
        }} />
      </View>
    </TouchableOpacity>
  )
}

export default () => {
  return (
    <SafeAreaView style={[LAYOUTS.flexCenter, LAYOUTS.screenView, { backgroundColor: COLORS.primaryLight, paddingBottom: 70 }]}>
      <StatusBar style={"dark"} />

      <Text style={[TYPOGRAPHY.Heading, { marginBottom: 15 }]}>Shop with ease!</Text>
      <Input placeHolder={' Search for " Products " '} IconPrefix={SearchNormal1} />

      <ProductCard />
      {/* <ScrollView style={{ width: "100%", marginTop: 10 }}>
      </ScrollView> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: COLORS.primaryDark,
    borderRadius: 20,
    padding: 20
  }
});
