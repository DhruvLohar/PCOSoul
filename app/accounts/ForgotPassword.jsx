import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
// import { FloatingLabelInput } from 'react-native-floating-label-input';

import Button, { TextButton } from "../../components/Button";
import Input from "../../components/Input";
import { COLORS, LAYOUTS, TYPOGRAPHY } from '../../theme/theme';
import { useRouter } from 'expo-router';
import { Lock, Sms } from 'iconsax-react-native';

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

            <Text style={[TYPOGRAPHY.Heading, { marginTop: 0, marginBottom: 5 }]}>Forgot Password ?</Text>
            <Text style={[TYPOGRAPHY.Body, { opacity: .8 }]}>Regain access to your account with a password reset. It's simple and secure.</Text>

            <View>
                <View style={{ marginBottom: 25, marginTop: 20 }}>
                    <Input placeHolder="Enter your Email" type='email' IconPrefix={Sms} />
                </View>
            </View>
            <Button title="Submit" onPress={handleLogin} type={"fill"} />


            <Button title="Go Back" onPress={() => router.push('/accounts/Login')} type={"outline"} />

        </View>
    );
}