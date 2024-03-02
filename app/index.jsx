import { useEffect } from "react";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native";


export default () => {
    const router = useRouter()

    useEffect(() => {
        router.push("/accounts/Login")
    })

    return (
        <SafeAreaView>
        </SafeAreaView>
    )
}