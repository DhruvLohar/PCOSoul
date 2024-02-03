import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
// import { FloatingLabelInput } from 'react-native-floating-label-input';

import Button, { TextButton } from "../../components/Button";
import Input from "../../components/Input";
import { COLORS, LAYOUTS, TYPOGRAPHY } from '../../theme/theme';
import { useRouter } from 'expo-router';
import { Lock, Sms, User } from 'iconsax-react-native';

export default () => {
    const router = useRouter();

    const handleLogin = () => {
        console.log("maza aaya")
    }

    return (
        <View style={[LAYOUTS.screenView, { alignItems: "flex-start", justifyContent: "center" }]}>
            <StatusBar style={"light"} />

            {/* <View style={{ alignSelf: "center", marginTop: 60 }}>
                    <Image source={require("../../assets/icon.png")} style={LAYOUTS.LogoImage} />
                </View> */}

            <Text style={[TYPOGRAPHY.Heading, { marginTop: 0, marginBottom: 5 }]}>Hello There ...</Text>
            <Text style={[TYPOGRAPHY.Body, { opacity: .8 }]}>Lorem ipsum doler sit amet.</Text>

            <View>
                <View style={{ marginBottom: 25, marginTop: 20 }}>
                    <Input placeHolder="Enter your Name" type='email' IconPrefix={User} />
                    <Input placeHolder="Enter your Email" type='email' IconPrefix={Sms} />
                    <Input placeHolder="Enter your Password" IconPrefix={Lock} iconNameSuffix={true} type='current-password' />
                </View>
            </View>
            <Button title="Create" onPress={handleLogin} type={"fill"} />


            <Button title="Already have an account ?" onPress={() => router.push('/accounts/Login')} type={"outline"} />

        </View>
    );
}
