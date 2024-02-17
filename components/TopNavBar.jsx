import { Text, View } from "react-native"
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import { COLORS } from "../theme/theme"


export default ({ components }) => {
    const Tab = createMaterialTopTabNavigator()

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarActiveTintColor: COLORS.primaryDark,
                tabBarInactiveTintColor: COLORS.Muted,
            })}
        >
            {components.map((compi, idx) => (
                <Tab.Screen key={idx} name={compi.Name} component={compi.Component} />
            ))}
        </Tab.Navigator>
    )
}