import { StyleSheet, Text, View, Image } from 'react-native';
import { COLORS, LAYOUTS, TYPOGRAPHY } from '../theme/theme';
import { Heart, Share } from 'iconsax-react-native';

export default ({ isExpPost }) => {
    return (
        <View style={styles.card}>
            <View style={{ flexDirection: "row", justifyContent: "flex-start", alignItems: "center", marginBottom: 10 }}>
                <Image style={{ width: 40, height: 40, resizeMode: "contain", borderRadius: 100 }} source={{
                    uri: "https://images.unsplash.com/photo-1628563694622-5a76957fd09c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5zdGFncmFtJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
                }} />
                <Text style={styles.username}>John Doe</Text>
                <Text>3 days ago</Text>
                {/* <View style={{marginLeft: 20}}>
                </View> */}
            </View>
            <Text style={TYPOGRAPHY.Card.Heading}>Lorem Ipsum dolar sit amet!</Text>
            <Text style={[TYPOGRAPHY.Card.Muted, { marginVertical: 5 }]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel enim vel velit pellentesque venenatis. Aliquam eros erat, vestibulum at ultricies  ...</Text>
        
            {isExpPost && (
                <View style={styles.postActions}>
                    <Heart size={32} color={COLORS.primaryDark} style={{marginRight: 30}} /> 
                    <Share size={32} color={COLORS.primaryDark} /> 
                </View>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
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
        marginRight: "auto",
        marginLeft: 20
    },
    postActions: {
        flexDirection: "row", 
        marginTop: 20,
        paddingTop: 20,
        borderTopWidth: .4,
        borderTopColor: COLORS.Muted,
    }
})