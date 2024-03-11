import { useEffect } from "react";
import { Redirect, useRouter } from "expo-router";


export default () => {
    const router = useRouter()

    return <Redirect href={'/accounts/Login'} />
}