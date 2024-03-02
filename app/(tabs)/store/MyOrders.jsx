import { Stack, useRouter } from "expo-router";
import { StyleSheet, Text, SafeAreaView, View, ScrollView, Image } from "react-native";
import { StatusBar } from "expo-status-bar";

import { COLORS, TYPOGRAPHY, LAYOUTS } from "../../../theme/theme";
import { TruckTime } from "iconsax-react-native";
// import Button from "../components/Button";

const OrderCard = () => {
    return (
        <View style={{ flexDirection: "column" }}>
            <View style={styles.container}>
                <Image
                    style={styles.cardImage}
                    source={{
                        uri: "https://rukminim2.flixcart.com/image/850/1000/xif0q/protein-supplement/0/e/f/protein-bars-bar-daily-choco-classic-healthy-protein-snack-no-original-imagt2znwsznkku3.jpeg"
                    }}
                />
                <View style={{ marginRight: "auto" }}>
                    <Text style={TYPOGRAPHY.Card.Body}>Max Protien Bar</Text>
                    <Text style={TYPOGRAPHY.Card.Heading}>Rs. 299</Text>
                </View>
                <Text style={TYPOGRAPHY.BodyInfo}>IN PROCESS</Text>
            </View>
            <View style={styles.trackerContainer}>
                <View style={styles.trackerItem}>
                    <Text style={TYPOGRAPHY.Card.Muted}>09 JAN, 2024</Text>
                    <Text style={TYPOGRAPHY.Card.Muted}>13 JAN, 2024</Text>
                </View>
                <View style={styles.trackerItem}>
                    <Text style={[TYPOGRAPHY.Card.Heading, {fontSize: 16}]}>Delhi</Text>
                    <Text style={[TYPOGRAPHY.Card.Heading, {fontSize: 16}]}>Mumbai</Text>
                </View>
                <View style={styles.trackerLine}>
                    <View style={styles.circle} />
                    <View style={{position: "relative", flex: 1, height: 30, alignItems: "center", justifyContent: "center"}}>
                        <View style={styles.line} />
                        <View style={styles.lineComplete} />
                        <View style={{ backgroundColor: "white", position: "absolute", left: "45%" }}> 
                            <TruckTime size={30} color={COLORS.primaryDark} />
                        </View>
                    </View>
                    <View style={styles.circle} />
                </View>
            </View>
        </View>
    )
}

const MyOrders = () => {
    return (
        <SafeAreaView style={[LAYOUTS.flexCenter, LAYOUTS.screenView, { backgroundColor: COLORS.primaryLight, position: 'relative' }]}>
            <StatusBar style={"dark"} />

            <Text style={[TYPOGRAPHY.Body, { marginBottom: 20, marginTop: 10 }]}>
                All your previous or in-process Orders are stored here.
            </Text>

            <ScrollView>
                <OrderCard />
            </ScrollView>
        </SafeAreaView>
    )
}

export default MyOrders;

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        marginBottom: 10
    },
    cardImage: {
        width: 65, height: 65,
        borderRadius: 15, marginRight: 20
    },
    trackerContainer: {
        width: "100%",
        flexDirection: "column"
    },
    trackerLine: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    trackerItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",
        marginTop: 10,
    },
    circle: {
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: COLORS.primary,
        marginHorizontal: 5,
    },
    line: {
        flex: 1,
        width: "100%",
        height: 3,
        backgroundColor: 'lightgrey',
        position: "absolute",
        borderRadius: 10
    },
    lineComplete: {
        flex: 1,
        width: "45%",
        left: 0,
        height: 3,
        backgroundColor: COLORS.primary,
        position: "absolute",
        borderRadius: 10
    },
    icon: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
    },
})