import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, Image, useWindowDimensions } from 'react-native';

import { COLORS, LAYOUTS, TYPOGRAPHY } from '../../theme/theme';
import Button from "../../components/Button"
import TopNavBar from '../../components/TopNavBar';

import { SafeAreaView } from 'react-native-safe-area-context';
import { Location, Setting } from 'iconsax-react-native';



export default () => {

    return (
        // <SafeAreaView style={[LAYOUTS.flexCenter, LAYOUTS.screenView, {width: "100%", height: "100%"}]}>
        //     <StatusBar style={"dark"} />

        //     {/* Header */}
        //     <View style={styles.header}>
        //         <Image
        //             style={{ width: 150, height: 150, borderRadius: 100, marginRight: 20 }}
        //             source={{
        //                 uri: "https://images.unsplash.com/photo-1457449940276-e8deed18bfff?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
        //             }}
        //         />
        //         <View style={{ justifyContent: "flex-start", alignItems: "flex-start" }}>
        //             <Text style={[TYPOGRAPHY.Heading, { marginBottom: 5, fontSize: 24 }]}>Dhruv Lohar</Text>
        //             <View style={[LAYOUTS.flexRowCenter, { marginBottom: 10 }]}>
        //                 <Location size={20} color={COLORS.primaryDark} />
        //                 <Text style={[TYPOGRAPHY.Card.Muted, { fontSize: 15, marginLeft: 6 }]}>Mumbai, India</Text>
        //             </View>
        //             <View style={[LAYOUTS.flexRowCenter, { marginBottom: 0 }]}>
        //                 <Button title="Edit Profile"
        //                     type={"fill"} style={styles.editProfile}
        //                     textStyles={{ fontSize: 14 }}
        //                 />
        //                 <Setting size={32} color={COLORS.primaryDark} />
        //             </View>
        //         </View>
        //     </View>

        //     {/* TABS Navigation */}
        // </SafeAreaView>
        <SafeAreaView style={{ width: "100%", height: "100%", backgroundColor: COLORS.primaryLight }}>
            <StatusBar style={"dark"} />

            <View style={styles.header}>
                <Image
                    style={{ width: 150, height: 150, borderRadius: 100, marginRight: 20 }}
                    source={{
                        uri: "https://images.unsplash.com/photo-1457449940276-e8deed18bfff?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
                    }}
                />
                <View style={{ justifyContent: "flex-start", alignItems: "flex-start" }}>
                    <Text style={[TYPOGRAPHY.Heading, { marginBottom: 5, fontSize: 24 }]}>Dhruv Lohar</Text>
                    <View style={[LAYOUTS.flexRowCenter, { marginBottom: 10 }]}>
                        <Location size={20} color={COLORS.primaryDark} />
                        <Text style={[TYPOGRAPHY.Card.Muted, { fontSize: 15, marginLeft: 6 }]}>Mumbai, India</Text>
                    </View>
                    <View style={[LAYOUTS.flexRowCenter, { marginBottom: 0 }]}>
                        <Button title="Edit Profile"
                            type={"fill"} style={styles.editProfile}
                            textStyles={{ fontSize: 14 }}
                        />
                        <Setting size={32} color={COLORS.primaryDark} />
                    </View>
                </View>
            </View>

            <TopNavBar />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",

        marginVertical: 20,
    },
    editProfile: {
        width: "auto",
        padding: 0,
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 200,
        marginRight: 10,
        textAlign: "center",
        verticalAlign: "middle"
    }
});

