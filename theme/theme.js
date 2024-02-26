const COLORS = {
    primary: "#B4D4AC",

    primaryLight: "#FFFFFF",
    primaryDark: "#252525",

    Muted: "#777777",
}

const LAYOUTS = {
    flexCenter: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    flexStart: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'start'
    },
    flexRowCenter: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
    },

    screenView: {
        width: "100%",
        height: "100%",
        paddingHorizontal: 20,
        paddingBottom: 90,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    
    LogoImage: {
        width: 180,
        height: 180,
        resizeMode: 'contain'
    }
} 

const TYPOGRAPHY = {
    Display: 42,
    Button: 20,

    Card: {
        Heading: {
            fontSize: 20,
            fontFamily: "PlusJakartaSans_600SemiBold",
            color: COLORS.primaryDark
        },
        Body: {
            fontSize: 15,
            fontFamily: "PlusJakartaSans_500Medium",
            color: COLORS.primaryDark
        },
        Muted: {
            fontSize: 15,
            fontFamily: "PlusJakartaSans_600SemiBold",
            color: COLORS.primaryDark,
            opacity: .8
        }
    },

    Heading: {
        fontSize: 34,
        fontFamily: "PlusJakartaSans_700Bold",
        color: COLORS.primaryDark
    },
    SubTitle: {
        fontSize: 24,
        fontFamily: "PlusJakartaSans_400Regular",
        color: COLORS.primaryDark
    },
    Body: {
        fontSize: 15,
        fontFamily: "PlusJakartaSans_400Regular",
        color: COLORS.primaryDark
    },
    BodyInfo: {
        fontSize: 15,
        fontFamily: "PlusJakartaSans_500Medium",
        color: COLORS.primaryDark,

        textDecorationColor: COLORS.primaryDark,
        textDecorationStyle: "solid",
        textDecorationLine: "underline"
    },

    Header: {
        fontSize: 21,
        fontFamily: "PlusJakartaSans_700Bold",
        color: COLORS.primaryDark
    },
}

const SHADOWS = {}

export {
    COLORS,
    LAYOUTS,
    TYPOGRAPHY,
    SHADOWS
};