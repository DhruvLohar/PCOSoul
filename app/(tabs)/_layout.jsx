import { Tabs, usePathname, useRouter } from "expo-router";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { COLORS, TYPOGRAPHY } from "../../theme/theme";
import { Book1, Home, Hospital, Profile, Shop } from "iconsax-react-native";
import { StatusBar } from "expo-status-bar";
import { useEffect, useMemo, memo } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const TabIcon = memo(({ Icon, focused }) => {
	return (
		<View style={styles.container}>
			<Icon
				size={focused ? 28 : 24}
				variant={focused ? "Bold" : "Outline"}
				color={COLORS.primaryDark}
			/>
		</View>
	);
});

export default _layout = () => {
	const tabs = useMemo(() => new Map([
		["Home", { title: "Home", name: "Home", Icon: Home, link: "/Home" }],
		["Store", { title: "store", name: "Store", Icon: Shop, link: "/store" }],
		["Blogs", { title: "blogs", name: "Blogs",Icon: Book1, link: "/blogs" }],
		["Doctors", { title: "doctor", name: "Doctors",Icon: Hospital, link: "/doctor" }],
		["Profile", { title: "Profile", name: "Profile",Icon: Profile, link: "/Profile" }],
	]), []);


	return (
		<Tabs
			screenOptions={{
				tabBarStyle: styles.tabBar,
				tabBarHideOnKeyboard: true,
				header: ({ route }) => {

					const tab = tabs.get(route.params.title)

					return (
						<SafeAreaView style={styles.tabHeader}>
							<StatusBar style="dark" translucent={false} backgroundColor={COLORS.primaryLight} />
							<View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
								<tab.Icon size={24} variant="Bold" color={COLORS.primaryDark} />
								<Text style={[TYPOGRAPHY.Header, { color: COLORS.primaryDark, marginLeft: 10 }]}>{tab.title}</Text>
							</View>
						</SafeAreaView>
					)
				},
			}}
		>
			{Array.from(tabs.values()).map((item, idx) => (
				<Tabs.Screen
					key={idx}
					name={item.title}
					initialParams={{ title: item.name, Icon: item.Icon }}
					options={{
						title: item.title,
						tabBarShowLabel: false,
						tabBarIcon: ({ focused }) => {
							if (item.Icon) {
								return <TabIcon focused={focused} Icon={item.Icon} />;
							} else {
								// Handle missing icon gracefully
								console.warn("Missing icon for tab:", item.title);
								return null;
							}
						},
					}}
				/>
			))}
		</Tabs>
	);
};

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
