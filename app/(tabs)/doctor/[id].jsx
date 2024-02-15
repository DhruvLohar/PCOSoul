import { Text, ScrollView, TouchableOpacity, Image, View, StyleSheet, FlatList } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { useLocalSearchParams, useRouter } from "expo-router"

import { COLORS, LAYOUTS, TYPOGRAPHY } from "../../../theme/theme";
import ShowMoreLess from "../../../components/ShowMoreLess"
import Button from "../../../components/Button";
import { DoctorUserReviews } from "../../../Data"

import { ArrowLeft2, Location } from "iconsax-react-native";

const UserReviewCard = ({ item }) => {
    return (
        <View style={styles.card}>
            <View style={{ flexDirection: "row", justifyContent: "flex-start", alignItems: "center", marginBottom: 10 }}>
                <Image style={{ width: 40, height: 40, resizeMode: "contain", borderRadius: 100 }} source={{
                    uri: "https://images.unsplash.com/photo-1628563694622-5a76957fd09c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5zdGFncmFtJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
                }} />
                <View style={{ marginLeft: 20 }}>
                    <Text style={styles.username}>{item.username}</Text>
                    <Text>{item.time} ago</Text>
                </View>
            </View>
            <Text style={[TYPOGRAPHY.Card.Muted, { marginVertical: 5 }]}>{item.review}</Text>
        </View>
    )
}

export default () => {

    const { id } = useLocalSearchParams()
    const router = useRouter()

    const profileData = [
        {
            title: "Doctor Name",
            data: "Dr. Amelia Johnson"
        },
        {
            title: "Years of Experience",
            data: "15"
        },
        {
            title: "Degree",
            data: "MD, MPH"
        },
        {
            title: "License",
            data: "ABC12345"
        },
        {
            title: "Specialization",
            data: "Cardiology"
        },
        {
            title: "Hospital Affiliation",
            data: "City General Hospital"
        },
        {
            title: "Languages Spoken",
            data: "English, Spanish"
        },
        {
            title: "Biography",
            data: "Dr. Johnson is a board-certified cardiologist with a passion for patient care. She has extensive experience in diagnosing and treating heart conditions, and she is committed to providing personalized care to each of her patients."
        }
    ]

    return (
        <SafeAreaView
            style={[
                LAYOUTS.flexStart,
                LAYOUTS.screenView,
                { backgroundColor: COLORS.primaryLight, paddingBottom: 90 },
            ]}
        >
            <TouchableOpacity
                style={{ flexDirection: "row", justifyContent: "flex-start", alignItems: "center", paddingBottom: 20 }}
                onPress={() => {
                    router.push('/doctor');
                }}
            >
                <ArrowLeft2
                    size={24} color={COLORS.primaryDark}
                    style={{ marginVertical: "auto", marginTop: 5 }}
                />
                <Text style={[TYPOGRAPHY.SubTitle, { fontFamily: "PlusJakartaSans_600SemiBold" }]}>Doctor's Profile</Text>
            </TouchableOpacity>

            <ScrollView>
                <View style={styles.header}>
                    <Image
                        style={{ width: 150, height: 150, borderRadius: 100, marginRight: 20 }}
                        source={{
                            uri: "https://images.unsplash.com/photo-1457449940276-e8deed18bfff?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
                        }}
                    />
                    <View style={{ justifyContent: "flex-start", alignItems: "flex-start" }}>
                        <Text style={[TYPOGRAPHY.Heading, { marginBottom: 5, fontSize: 24 }]}>Dhruv Lohar</Text>
                        <View style={[LAYOUTS.flexRowCenter, { marginBottom: 0 }]}>
                            <Location size={20} color={COLORS.primaryDark} />
                            <Text style={[TYPOGRAPHY.Card.Muted, { fontSize: 15, marginLeft: 6 }]}>Mumbai, India</Text>
                        </View>
                        <Text style={[TYPOGRAPHY.Card.Muted, { fontSize: 15 }]}>Cardiologist</Text>
                        <Text style={[TYPOGRAPHY.Card.Muted, { fontSize: 15 }]}>18 Years of Experience</Text>
                    </View>
                </View>

                <Text style={[TYPOGRAPHY.Card.Heading, { marginBottom: 15, fontSize: 22 }]}>
                    Profile Details
                </Text>
                <ShowMoreLess items={profileData} />

                <Text style={[TYPOGRAPHY.Card.Heading, { marginBottom: 15, marginTop: 25, fontSize: 22 }]}>
                    User Reviews
                </Text>

                <FlatList
                    data={DoctorUserReviews}
                    renderItem={UserReviewCard}
                    horizontal={true}
                    contentContainerStyle={{ flexGrow: 1 }}
                />

                <Button title="Book an Appointment" onPress={() => {}} type={"fill"} />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",

        marginBottom: 30,
    },
    card: {
        flex: 1,
        maxWidth: 350,
        marginRight: 10,
        // height: "auto",
        backgroundColor: "transparent",
        borderWidth: 2,
        borderColor: COLORS.primaryDark,
        borderRadius: 20,
        padding: 20,
        marginBottom: 20
    },
    username: {
        fontSize: 18,
        fontFamily: "PlusJakartaSans_600SemiBold",
        marginBottom: 2
    }
});