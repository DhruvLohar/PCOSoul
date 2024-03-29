import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Modal, Image, ScrollView, Pressable } from 'react-native';
import { Link, useRouter } from "expo-router";

import { COLORS, LAYOUTS, TYPOGRAPHY } from '../../theme/theme';
import Button from "../../components/Button"
import TopNavBar from '../../components/TopNavBar';
import BaseCard from '../../components/BaseCard';
import DoctorCard from '../../components/DoctorCard';

import { SafeAreaView } from 'react-native-safe-area-context';
import { Location, Setting } from 'iconsax-react-native';

const Feed = () => {
    return (
        <ScrollView style={[styles.topBarContainer]}>
            <BaseCard />
            <BaseCard />
            <BaseCard />
        </ScrollView>
    )
}

const Appointments = () => {
    return (
        <ScrollView style={[styles.topBarContainer]}>
            <DoctorCard name={"John Doe"} content={"15th Jan, 2024 | 4 PM - 5 PM"} />
            <DoctorCard name={"Sara Jones"} content={"15th Jan, 2024 | 2 PM - 3 PM"} />
        </ScrollView>
    )
}



export default function Profile() {


    const router = useRouter()

    const components = [
        { Name: "My Feed", Component: Feed },
        { Name: "Appointments", Component: Appointments },
    ]

    const [modalVisible, setModalVisible] = useState(false);


    return (
        <SafeAreaView style={{ width: "100%", height: "100%", backgroundColor: COLORS.primaryLight, paddingBottom: 90 }}>
            <StatusBar style={"dark"} />

            <View style={styles.header}>
                <Image
                    style={styles.profileImage}
                    source={{
                        uri: "https://images.unsplash.com/photo-1457449940276-e8deed18bfff?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
                    }}
                />
                <View style={{ justifyContent: "flex-start", alignItems: "flex-start" }}>
                    <Text style={[TYPOGRAPHY.Heading, { marginBottom: 5, fontSize: 24 }]}>Dhruv Lohar</Text>
                    <View style={[LAYOUTS.flexRowCenter, { marginBottom: 10 }]}>
                        <Location size={20} color={COLORS.primaryDark} />
                        <Text style={[TYPOGRAPHY.Card.Muted, { fontSize: 15, marginLeft: 6 }]}>Mumbai, India</Text>
                    </View>
                    <View style={[LAYOUTS.flexRowCenter, { marginBottom: 0 }]}>
                        <Button title="Edit Profile"
                            type={"fill"} style={styles.editProfile}
                            textStyles={{ fontSize: 14 }}
                        />
                        <Pressable onPress={() => setModalVisible(true)}>
                            <Setting size={32} color={COLORS.primaryDark} />
                        </Pressable>
                    </View>
                </View>
            </View>

            <TopNavBar components={components} />

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={modalStyles.modalContainer}>
                    <View style={modalStyles.modalContent}>
                        <Pressable style={modalStyles.button} onPress={() => router.push("/store/MyOrders")}>
                            <Text style={modalStyles.buttonText}>My Orders</Text>
                        </Pressable>
                        <Pressable style={modalStyles.button} onPress={() => console.log("Change Password pressed")}>
                            <Text style={modalStyles.buttonText}>Change Password</Text>
                        </Pressable>
                        <Pressable style={modalStyles.button} onPress={() => console.log("/accounts/Login")}>
                            <Text style={modalStyles.buttonText}>Logout</Text>
                        </Pressable>
                        <Pressable style={modalStyles.button} onPress={() => setModalVisible(false)}>
                            <Text style={modalStyles.buttonText}>Close</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",

        marginVertical: 20,
    },
    editProfile: {
        width: "auto",
        padding: 0,
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 200,
        marginRight: 10,
        textAlign: "center",
        verticalAlign: "middle"
    },
    profileImage: {
        width: 120, height: 120,
        borderRadius: 100, marginRight: 20
    },

    topBarContainer: {
        paddingHorizontal: 20,
        paddingTop: 20,
        backgroundColor: COLORS.primaryLight
    }
});

const modalStyles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'transparent',
        
    },
    modalContent: {
        backgroundColor: COLORS.primaryLight,
        paddingVertical: 20,
        width: '100%',
        height: 'auto', // Adjust the height here
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderWidth: 2,
        borderColor: "#ddd",
        overflow: 'hidden', // Hide overflow content
    },
    button: {
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        width: '100%',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 16,
    },
})
