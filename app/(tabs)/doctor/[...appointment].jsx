import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { useRouter } from "expo-router"

import { COLORS, LAYOUTS, TYPOGRAPHY } from '../../../theme/theme';
import Input from "../../../components/Input";
import Button from "../../../components/Button";

import { SafeAreaView } from 'react-native-safe-area-context';
import { SearchNormal1 } from 'iconsax-react-native';
import DoctorCard from '../../../components/DoctorCard';


export default () => {

    const router = useRouter()

    return (
        <SafeAreaView style={[LAYOUTS.flexCenter, LAYOUTS.screenView, { backgroundColor: COLORS.primaryLight, position: "relative", }]}>
            <StatusBar style={"dark"} />

            <Text style={[TYPOGRAPHY.Body, { marginBottom: 20 }]}>
                Fill the form below to secure your appointment!
            </Text>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    // image: {
    //     width: Dimensions.get('window').width, // Display one image at a time
    //     height: 300, // Adjust the height as needed
    // },
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
