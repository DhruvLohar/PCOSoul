import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { COLORS, LAYOUTS, TYPOGRAPHY } from '../../../theme/theme';
// import { Directions, FlingGestureHandler, State } from 'react-native-gesture-handler';

import { SafeAreaView } from 'react-native-safe-area-context';

export default () => {


    return (
        <SafeAreaView style={[LAYOUTS.flexCenter, LAYOUTS.screenView, { backgroundColor: COLORS.primaryLight, position: "relative", }]}>
            <StatusBar style={"dark"} />

            <Text style={TYPOGRAPHY.Heading}>Good Afternoon, Dhruv</Text>

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

