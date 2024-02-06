import { Tabs, usePathname, useRouter } from "expo-router";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { COLORS, TYPOGRAPHY } from "../../theme/theme";
import { Book1, Home, Hospital, Profile, Shop } from "iconsax-react-native";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default () => {

    const tabs = [
        { name: "Home", title: "Home", Icon: Home, link: '/Home' },
        { name: "store/index", title: "Store", Icon: Shop, link: '/store' },
        { name: "blogs/index", title: "Blogs", Icon: Book1, link: '/blogs' },
        { name: "doctor/index", title: "Doctors", Icon: Hospital, link: '/doctor' },
        { name: "Profile", title: "Profile", Icon: Profile, link: '/Profile' },
    ];

    const TabHeader = ({ route }) => {
        const currentTab = tabs.find((tab) => tab.name === route.name);

        return (
            <SafeAreaView style={styles.tabHeader}>
                <StatusBar style="dark" translucent={false} backgroundColor={COLORS.primaryLight} />
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                    <currentTab.Icon size={24} variant="Bold" color={COLORS.primaryDark} />
                    <Text style={[TYPOGRAPHY.Header, { color: COLORS.primaryDark, marginLeft: 10 }]}>{currentTab?.title}</Text>
                    {/* {currentTab.Icon && 
                    } */}
                </View>
            </SafeAreaView>
        );
    }

    return (
        <Tabs screenOptions={{
            tabBarStyle: styles.tabBar,
            tabBarHideOnKeyboard: true,
            headerStyle: {
                backgroundColor: COLORS.primaryLight
            },
            header: ({ route }) => (
                <TabHeader route={route} />
            )
        }}>
            {tabs.map((item, idx) => (
                <Tabs.Screen
                    key={idx}
                    name={item.name}
                    options={{
                        title: item.title,
                        tabBarShowLabel: false,
                        tabBarIcon: ({ focused }) => {
                            return (
                                <View style={[styles.container]}>
                                    <item.Icon size={focused ? 28 : 24} variant={focused ? "Bold" : "Outline"} color={COLORS.primaryDark} />
                                </View>
                            );
                        }
                    }}
                />
            ))}
        </Tabs>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        paddingVertical: 16,
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
        
        backgroundColor: COLORS.primary
    },

    tabHeader: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: 60,
        backgroundColor: COLORS.primaryLight,
        paddingTop: 5,
        paddingHorizontal: 20
    },
    profileImage: {
        width: 44,
        height: 44,
        resizeMode: "contain",
        borderRadius: 22
    }
})