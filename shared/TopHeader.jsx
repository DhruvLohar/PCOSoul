import { Stack, useRouter } from "expo-router";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { COLORS, TYPOGRAPHY } from "../theme/theme";
import { ArrowLeft} from "iconsax-react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const TopHeader = ({ title }) => {

    const router = useRouter()

    return (
        <SafeAreaView style={styles.tabHeader}>
            <View
                style={{
                    width: "100%",
                    flex: 1,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    paddingHorizontal: 0
                }}
            >
                <ArrowLeft
                    size={28}
                    color={COLORS.primaryDark}
                    onPress={() => router.back()}
                />
                <Text
                    style={[
                        TYPOGRAPHY.SubTitle,
                        {
                            color: COLORS.primaryDark,
                            fontFamily: "PlusJakartaSans_600SemiBold",
                            marginLeft: 10,
                        }
                    ]}
                >
                    {title}
                </Text>
            </View>
        </SafeAreaView>
    );
};

export default TopHeader;

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        paddingVertical: 10,
    },
    tabBar: {
        position: "absolute",
        bottom: 10,
        right: 0,
        left: 0,

        borderRadius: 25,
        marginHorizontal: 20,

        elevation: 0,
        height: 70,

        backgroundColor: COLORS.primary,
    },

    tabHeader: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: 60,
        backgroundColor: COLORS.primaryLight,
        paddingTop: 5,
        paddingHorizontal: 20,
    },
    profileImage: {
        width: 44,
        height: 44,
        resizeMode: "contain",
        borderRadius: 22,
    },
});