import { Text, View } from "react-native"
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import { COLORS } from "../theme/theme"


const Feed = () => {
    return (
        <View>
            <Text>My feed</Text>
        </View>
    )
}

const Appointments = () => {
    return (
        <View>
            <Text>Appointments</Text>
        </View>
    )
}

export default () => {
    const Tab = createMaterialTopTabNavigator()

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarActiveTintColor: COLORS.primary
            })}
        >
            <Tab.Screen name="My Feed" component={Feed} />
            <Tab.Screen name="Appointments" component={Appointments} />
        </Tab.Navigator>
    )
}