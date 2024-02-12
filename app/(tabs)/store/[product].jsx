import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Dimensions, ScrollView } from "react-native";
import { COLORS, LAYOUTS, TYPOGRAPHY } from "../../../theme/theme";

import Input from "../../../components/Input";
import Button from "../../../components/Button";

import { SafeAreaView } from "react-native-safe-area-context";

export default () => {
  return (
    <SafeAreaView
      style={[
        LAYOUTS.flexCenter,
        LAYOUTS.screenView,
        { backgroundColor: COLORS.primaryLight, position: "relative" },
      ]}
    >
      <StatusBar style={"dark"} />

      <Text style={[TYPOGRAPHY.Heading, { marginBottom: 20 }]}>
        Template Text
      </Text>
    </SafeAreaView>
  );
};
