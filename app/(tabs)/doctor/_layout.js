import { Stack} from "expo-router";
import TopHeader from "../../../shared/TopHeader"

export default function _layout() {
	return (
		<Stack>
			<Stack.Screen
				name="index"
				options={{
					headerShown: false
				}}
			/>

			<Stack.Screen
				name="[id]"
				options={{
					headerShown: true,
					header: ({ route }) => <TopHeader title={"Doctor's Profile"} onBack={'/doctor'} />
				}}
			/>

			<Stack.Screen
				name="[...appointment]"
				options={{
					headerShown: true,
					header: ({ route }) => <TopHeader title={"Appointment Booking"} />
				}}
			/>
		</Stack>
	);
}