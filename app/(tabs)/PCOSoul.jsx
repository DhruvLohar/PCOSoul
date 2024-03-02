import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import Svg, { Path } from 'react-native-svg';
import { StyleSheet, Text, View, Dimensions, ScrollView, Pressable } from 'react-native';
import { COLORS, LAYOUTS, TYPOGRAPHY } from '../../theme/theme';

import Input from "../../components/Input"
import Button from "../../components/Button"

import { SafeAreaView } from 'react-native-safe-area-context';
import BaseCard from '../../components/BaseCard';

export default () => {

  const handleShare = () => {

  }

  return (
    <SafeAreaView style={[LAYOUTS.flexCenter, LAYOUTS.screenView, { backgroundColor: COLORS.primaryLight, position: 'relative' }]}>
      <StatusBar style={"dark"} />

      <ScrollView showsVerticalScrollIndicator={false}>

        <Text style={[TYPOGRAPHY.Heading, { marginBottom: 20 }]}>Good Afternoon, Dhruv</Text>
        <Input placeHolder="Share your Experience ..." isTextarea={true} />
        <Button title="Share" onPress={handleShare} type={"fill"} style={{ width: "80%", borderRadius: 80, alignSelf: "center" }} />

        <Text style={[TYPOGRAPHY.SubTitle, { marginTop: 20, marginBottom: 5, fontFamily: 'PlusJakartaSans_700Bold' }]}>Upcoming Appointments</Text>
        <Text style={TYPOGRAPHY.Card.Muted}>No upcoming appointments.</Text>

        <Text style={[TYPOGRAPHY.SubTitle, { marginVertical: 20, fontFamily: 'PlusJakartaSans_700Bold' }]}>Explore</Text>
        <BaseCard isExpPost={true} />
        <BaseCard isExpPost={true} />
      </ScrollView>

      <Pressable style={styles.FABButton}>
        <Svg width="36" height="36" viewBox="0 0 24 24" fill="none">
          <Path fill="none" d="M0 0h24v24H0z" />
          <Path d="M17 2H13V1H11V2H7C5.34315 2 4 3.34315 4 5V8C4 10.7614 6.23858 13 9 13H15C17.7614 13 20 10.7614 20 8V5C20 3.34315 18.6569 2 17 2ZM11 7.5C11 8.32843 10.3284 9 9.5 9C8.67157 9 8 8.32843 8 7.5C8 6.67157 8.67157 6 9.5 6C10.3284 6 11 6.67157 11 7.5ZM16 7.5C16 8.32843 15.3284 9 14.5 9C13.6716 9 13 8.32843 13 7.5C13 6.67157 13.6716 6 14.5 6C15.3284 6 16 6.67157 16 7.5ZM4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H4Z" fill={COLORS.primaryLight} />
        </Svg>
      </Pressable>
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

  FABButton: {
    width: 70, height: 70, borderRadius: 200, backgroundColor: COLORS.primary,
    alignItems: 'center', justifyContent: 'center',
    position: 'absolute', right: 20, bottom: 90
  }
});

