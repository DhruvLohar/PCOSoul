import { Image, StyleSheet, Text, View } from "react-native"
import { TYPOGRAPHY, COLORS } from "../theme/theme"
import { ArrowRight2 } from "iconsax-react-native"

import { useRouter } from "expo-router"

const DoctorCard = ({ name, content, SuffixIcon, iconAction }) => {

    const router = useRouter()

    return (
        <View style={styles.container}>
            <Image
                style={styles.cardImage}
                source={{
                    uri: "https://images.unsplash.com/photo-1457449940276-e8deed18bfff?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
                }}
            />
            <View style={{marginRight: "auto"}}>
                <Text style={TYPOGRAPHY.Card.Heading}>{name}</Text>
                <Text style={TYPOGRAPHY.Card.Body}>{content}</Text>
            </View>
            {SuffixIcon && 
                <SuffixIcon size={32} color={COLORS.primaryDark} onPress={iconAction} />
            }
        </View>
    )
}

export default DoctorCard;

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
    }
})