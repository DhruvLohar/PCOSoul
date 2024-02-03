import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native';
import { COLORS, LAYOUTS, TYPOGRAPHY } from '../../theme/theme';

import Input from "../../components/Input"
import Button from "../../components/Button"
// import { Directions, FlingGestureHandler, State } from 'react-native-gesture-handler';

import { SafeAreaView } from 'react-native-safe-area-context';
import BaseCard from '../../components/BaseCard';

export default () => {

  const handleShare = () => {

  }

  return (
    <SafeAreaView style={[LAYOUTS.flexCenter, LAYOUTS.screenView, { backgroundColor: COLORS.primaryLight, paddingBottom: 70 }]}>
      <StatusBar style={"dark"} />

      <ScrollView>

        <Text style={[TYPOGRAPHY.Heading, { marginBottom: 20 }]}>Good Afternoon, Dhruv</Text>
        <Input placeHolder="Share your Experience ..." isTextarea={true} />
        <Button title="Share" onPress={handleShare} type={"fill"} style={{ width: "80%", borderRadius: 80, alignSelf: "center" }} />

        <Text style={[TYPOGRAPHY.SubTitle, { marginTop: 20, marginBottom: 5, fontFamily: 'PlusJakartaSans_700Bold' }]}>Upcoming Appointments</Text>
        <Text style={TYPOGRAPHY.Card.Muted}>No upcoming appointments.</Text>

        <Text style={[TYPOGRAPHY.SubTitle, { marginVertical: 20, fontFamily: 'PlusJakartaSans_700Bold' }]}>Explore</Text>
        <BaseCard />
        <BaseCard />

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: Dimensions.get('window').width, // Display one image at a time
    height: 300, // Adjust the height as needed
  },
  pageIndicator: {
    alignSelf: 'center',
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
  },
});

