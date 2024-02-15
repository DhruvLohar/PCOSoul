import { Image, StyleSheet, Text, View } from "react-native"
import { TYPOGRAPHY, COLORS } from "../theme/theme"
import { ArrowRight2 } from "iconsax-react-native"

import { useRouter } from "expo-router"

export default () => {

    const router = useRouter()

    return (
        <View style={styles.container}>
            <Image
                style={{ width: 80, height: 80, borderRadius: 20, marginRight: 20 }}
                source={{
                    uri: "https://images.unsplash.com/photo-1457449940276-e8deed18bfff?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
                }}
            />
            <View style={{marginRight: "auto"}}>
                <Text style={TYPOGRAPHY.Card.Heading}>Dr. Carl Jones</Text>
                <Text style={TYPOGRAPHY.Card.Body}>Cardiologist</Text>
            </View>
            <ArrowRight2 size={32} color={COLORS.primaryDark} onPress={() => router.push('/doctor/123')} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start"
    }
})