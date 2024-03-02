import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { useRouter } from "expo-router"

import { COLORS, LAYOUTS, TYPOGRAPHY } from '../../../theme/theme';
import Input from "../../../components/Input";
import Button from "../../../components/Button";

import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowRight2, SearchNormal1 } from 'iconsax-react-native';
import DoctorCard from '../../../components/DoctorCard';
import HorizontalFilters from '../../../components/HorizontalFilters';


export default () => {

    const router = useRouter()

    const navigateToDoctorProfil = () => {
        router.push("/doctor/123")
    }

    return (
        <SafeAreaView style={[LAYOUTS.screenView, { backgroundColor: COLORS.primaryLight, position: "relative", }]}>
            <StatusBar style={"dark"} />

            <Text style={TYPOGRAPHY.Heading}>Consult the best, Doctor!</Text>
            <Text style={[TYPOGRAPHY.Body, { marginBottom: 20, marginTop: 10 }]}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel enim vel velit.
            </Text>
            <Input
                placeHolder={'Search By " Specialization, Location "'}
                IconPrefix={SearchNormal1}
            />
            <View style={{ height: 80 }}>
                <HorizontalFilters userInput={{
                    Specialization: ['dermat', 'opthal', 'ortho'],
                    Location: ['New York', 'Los Angeles', 'Chicago'],
                    Fees: ['Less than $100', '$100 - $200', 'More than $200'],
                }} />

            </View>


            <ScrollView style={{ marginTop: 10 }}>
                <DoctorCard name={"Sara Jones"} content={"Nutritionist"} SuffixIcon={ArrowRight2} iconAction={navigateToDoctorProfil} />
            </ScrollView>

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

