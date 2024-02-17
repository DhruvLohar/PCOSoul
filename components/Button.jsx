import React from 'react';
import { View, StyleSheet, Text, Pressable, TouchableOpacity } from 'react-native'
import { COLORS, LAYOUTS, TYPOGRAPHY } from '../theme/theme';
// import { TouchableOpacity, StyleSheet, Text } from 'react-native';

const Button = ({ title, onPress, type, PrefixIcon, showQuantity, style, textStyles }) => {
    const [elevation, setElevation] = React.useState(5)

    const toggleElevationIn = () => setElevation(5)
    const toggleElevationOut = () => setElevation(0)

    const textColor = (type === 'outline') ? COLORS.primaryDark : COLORS.primaryLight

    return (
        <TouchableOpacity
            activeOpacity={0.8} // Adjust the activeOpacity as needed
            onPress={onPress}
            onPressIn={toggleElevationIn}
            onPressOut={toggleElevationOut}
            style={[
                styles.button,
                (type === "outline") ? styles.buttonOutline : { elevation: elevation },
                style
            ]}
        >
            {PrefixIcon && <PrefixIcon size={24} color={textColor} />}
            <Text
                style={[
                    styles.text,
                    { color: textColor, paddingLeft: PrefixIcon ? 10 : 0 },
                    textStyles
                ]}
            >
                {title}
            </Text>
            {showQuantity &&
                <Text
                    style={{
                        width: 30,
                        borderRadius: 60,
                        height: 30,
                        backgroundColor: COLORS.primaryDark,
                        color: COLORS.primary,
                        textAlignVertical: "center",
                        textAlign: "center",
                        marginLeft: 10
                    }}
                >
                    3
                </Text>
            }
        </TouchableOpacity>
    )
}

export const TextButton = ({ title, onPress }) => {
    return (
        <View>
            <TouchableOpacity onPress={onPress} style={styles.buttonText}>
                <Text style={TYPOGRAPHY.BodyInfo}>{title}</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Button;

const styles = StyleSheet.create({
    button: {
        width: "100%",

        backgroundColor: COLORS.primaryDark,
        color: COLORS.primaryLight,

        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',

        paddingHorizontal: 20,
        paddingVertical: 17,
        marginVertical: 10,
        borderRadius: 20
    },

    buttonOutline: {
        backgroundColor: 'transparent',
        borderStyle: "solid",
        borderWidth: 2,
        borderColor: COLORS.primaryDark
    },
    buttonText: {
        backgroundColor: 'transparent',
        padding: 5,
        borderRadius: 5,
    },

    text: {
        fontSize: TYPOGRAPHY.Button,
        lineHeight: TYPOGRAPHY.Button + 8,
        letterSpacing: 0.25,
        fontFamily: 'PlusJakartaSans_500Medium'
    }
})