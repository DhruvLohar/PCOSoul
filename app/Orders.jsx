import { Stack, useRouter } from "expo-router";
import { StyleSheet, Text, SafeAreaView, View } from "react-native";
import { StatusBar } from "expo-status-bar";

import { COLORS, TYPOGRAPHY, LAYOUTS } from "../theme/theme";
import Button from "../components/Button";

const Orders = () => {
    return (
        <SafeAreaView style={[LAYOUTS.flexCenter, LAYOUTS.screenView, { backgroundColor: COLORS.primaryLight, position: 'relative' }]}>
            <StatusBar style={"dark"} />
            
            <Text style={[TYPOGRAPHY.Heading, { marginBottom: 0 }]}>
                My Orders
            </Text>
            <Text style={[TYPOGRAPHY.Body, { marginBottom: 20, marginTop: 5 }]}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel enim vel velit.
            </Text>
        </SafeAreaView>
    )
}

export default Orders;