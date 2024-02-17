import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { COLORS, LAYOUTS, TYPOGRAPHY } from "../../../theme/theme";
// import { Directions, FlingGestureHandler, State } from 'react-native-gesture-handler';

import { SafeAreaView } from "react-native-safe-area-context";

export default () => {
  const url =
    "https://www.postcourier.com.pg/wp-content/uploads/2017/10/NationalNews_03_MentalHealth.jpg?resize=1536,864";

  return (
    <SafeAreaView
      style={[
        LAYOUTS.flexCenter,
        LAYOUTS.screenView,
        {
          backgroundColor: COLORS.primaryLight,
          position: "relative",
        },
      ]}
    >
      <StatusBar style={"dark"} />

      <ScrollView showsVerticalScrollIndicator={false}>
        <Text
          style={[TYPOGRAPHY.Card.Heading, { marginBottom: 20, fontSize: 30 }]}
        >
          Mental Hacks 2024 📝
        </Text>

        <Text style={[TYPOGRAPHY.Card.Muted]}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
          assumenda debitis. Aut dolore numquam, odio at animi praesentiumt...
        </Text>
        <View
          style={[
            LAYOUTS.flexRowCenter,
            TYPOGRAPHY.Card.Muted,
            {
              justifyContent: "space-between",
              marginVertical: 20,
            },
          ]}
        >
          <Text style={[TYPOGRAPHY.Card.Muted, { fontWeight: "300" }]}>
            Author: John Doe
          </Text>
          <Text style={[TYPOGRAPHY.Card.Muted, { fontWeight: "300" }]}>
            15 mins ago
          </Text>
        </View>

        <Image
          style={{
            width: "100%",
            height: 270,
            marginTop: 5,
            resizeMode: "contain",
            borderRadius: 20,
          }}
          source={{
            uri: url,
          }}
        />

        <Text style={[TYPOGRAPHY.Card.Heading, { fontSize: 30 }]}>
          Lorem Ipsum Doller !
        </Text>
        <Text
          style={[
            TYPOGRAPHY.Body,
            { flex: 1, marginVertical: 8, textAlign: "justify" },
          ]}
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
          perspiciatis excepturi ea, facere unde voluptate dolore quia itaque
          error in labore esse iure dicta. Doloremque consectetur tempore
          blanditiis magni ea!
        </Text>

        <Text
          style={[
            TYPOGRAPHY.Body,
            { flex: 1, marginVertical: 8, textAlign: "justify" },
          ]}
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
          perspiciatis excepturi ea, facere unde voluptate dolore quia itaque
          error in labore esse iure dicta. Doloremque consectetur tempore
          blanditiis magni ea Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Vero neque mollitia fuga fugit esse laborum reprehenderit soluta
          dolores dolore dolorum.
        </Text>
        <Text
          style={[
            TYPOGRAPHY.Body,
            { flex: 1, marginVertical: 8, textAlign: "justify" },
          ]}
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
          perspiciatis excepturi ea, facere unde voluptate dolore quia itaque
          error in labore esse iure dicta. Doloremque consectetur tempore
          blanditiis magni ea!
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};
