import { useRouter } from "expo-router"
import { StatusBar } from 'expo-status-bar';
import * as ImagePicker from 'expo-image-picker';
import React, { useState } from 'react';
import { StyleSheet, Text, Image, ScrollView, Platform, View, TouchableOpacity } from 'react-native';
import DateTimePicker from "@react-native-community/datetimepicker";

import { COLORS, LAYOUTS, TYPOGRAPHY } from '../../../theme/theme';
import Input from "../../../components/Input";
import Button from "../../../components/Button";

import { SafeAreaView } from 'react-native-safe-area-context';
import { Calendar, Image as ImageIcon, TextalignLeft } from 'iconsax-react-native';

const TimeSlotGrid = () => {
    const [selectedSlot, setSelectedSlot] = useState([]);

    const handleSlotPress = (slot) => {
        setSelectedSlot(slot === selectedSlot ? null : slot);
    };

    const isSlotSelected = (slot) => selectedSlot.includes(slot);

    const renderTimeSlots = () => {
        const slots = ['10am', '11am', '12pm', '1pm', '2pm', '3pm'];
        return slots.map((slot, index) => (
            <TouchableOpacity
                key={index}
                style={[timeSlotStyles.slot, isSlotSelected(slot) && timeSlotStyles.slotSelected]}
                onPress={() => handleSlotPress(slot)}
            >
                <Text style={[timeSlotStyles.slotText, isSlotSelected(slot) && { color: COLORS.primaryLight }]}>{slot}</Text>
            </TouchableOpacity>
        ));
    };

    return (
        <View style={timeSlotStyles.container}>
            {renderTimeSlots()}
        </View>
    );
};


export default () => {

    const router = useRouter()

    const [image, setImage] = useState(null);
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [date, setDate] = useState(new Date());

    const handleStartDateChange = (event, selectedDate) => {
        setShowDatePicker(Platform.OS === "ios");
        const currentDate = selectedDate || new Date(event.target.value) || startDate;
        setDate(currentDate);
    };

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.uri);
        }
    };

    return (
        <SafeAreaView style={[LAYOUTS.flexCenter, LAYOUTS.screenView, { backgroundColor: COLORS.primaryLight, }]}>
            <StatusBar style={"dark"} />

            <Text style={[TYPOGRAPHY.Body, { marginBottom: 20 }]}>
                Fill the form below to secure your appointment!
            </Text>

            <ScrollView>
                <Input placeHolder="Describe your problem ..." type='email' IconPrefix={TextalignLeft} />

                <Text style={[TYPOGRAPHY.Card.Heading, { marginBottom: 10, fontSize: 20 }]}>
                    Upload any relevant images or reports
                </Text>
                <Button
                    title="Attach Images / Reports" onPress={pickImage}
                    type={"outline"} PrefixIcon={ImageIcon}
                    textStyles={{ fontSize: 16 }}
                />
                {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}

                <Text style={[TYPOGRAPHY.Card.Heading, { marginVertical: 10, fontSize: 20 }]}>
                    Select Appointment Date and slot
                </Text>
                <Button
                    title={date.toLocaleDateString()} onPress={() => setShowDatePicker(true)}
                    type={"outline"} PrefixIcon={Calendar}
                    textStyles={{ fontSize: 16 }}
                />
                {showDatePicker && (
                    <DateTimePicker
                        value={date}
                        mode="date"
                        display="default"
                        onChange={handleStartDateChange}
                    />
                )}
                <TimeSlotGrid />

                <Button title="Confirm" onPress={() => { }} type={"fill"} />
            </ScrollView>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    pageIndicator: {
        alignSelf: 'center',
        marginVertical: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
    },
    button: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
    },
});

const timeSlotStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    slot: {
        backgroundColor: 'lightgray',
        borderRadius: 20,
        paddingVertical: 8,
        paddingHorizontal: 16,
        margin: 5,
    },
    slotSelected: {
        backgroundColor: COLORS.primaryDark,
    },
    slotText: {
        fontSize: 16,
    },
});
