import { Stack, useRouter } from "expo-router";
import { StyleSheet, Text, SafeAreaView, View } from "react-native";
import { HambergerMenu, User } from "iconsax-react-native";

import { COLORS, TYPOGRAPHY } from "../theme/theme";
import Button from "../components/Button";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.primaryLight,
        paddingHorizontal: 20
    }
});

export default () => {
    const router = useRouter()

    return (
        <SafeAreaView style={styles.container} >
            <Stack.Screen options={{
                headerTitle: "Prototype Phase"
            }} />

            <Text style={{ paddingVertical: 20, textAlign: 'center', color: COLORS.primaryDark }}>
                PCO SOUL APP
            </Text>

            <Button title="Login" onPress={() => router.push("/accounts/Login")} type={"fill"} />
            <Button title="Home" onPress={() => router.push("/Home")} type={"fill"} />
        </SafeAreaView>
    )
}