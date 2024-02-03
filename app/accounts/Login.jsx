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

            <Text style={[TYPOGRAPHY.Heading, { marginTop: 0, marginBottom: 5 }]}>Welcome Back</Text>
            <Text style={[TYPOGRAPHY.Body, { opacity: .8 }]}>Lorem ipsum doler sit amet.</Text>

            <View>
                <View style={{ marginBottom: 25, marginTop: 20 }}>
                    <Input placeHolder="Enter your email" type='email' IconPrefix={Sms} />
                    <Input placeHolder="Enter your password" IconPrefix={Lock} iconNameSuffix={true} type='current-password' />

                    <TextButton title={"Forgot Password?"} onPress={() => router.push('/accounts/ForgotPassword')} />
                </View>
            </View>
            <Button title="Login" onPress={handleLogin} type={"fill"} />


            <Button title="Create an account" onPress={() => router.push('/accounts/Signup')} type={"outline"} />

        </View>
    );
}