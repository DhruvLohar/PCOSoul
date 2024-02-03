import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { COLORS, LAYOUTS, TYPOGRAPHY } from '../../../theme/theme';
// import { Directions, FlingGestureHandler, State } from 'react-native-gesture-handler';

import { SafeAreaView } from 'react-native-safe-area-context';
import { BlogCards } from '../../../Data';

const BlogCard = ({ data }) => {
    return (
        <TouchableOpacity onPress={() => console.log("smthn")} activeOpacity={0.9} style={{marginBottom: 30}}>
            <View style={styles.blogCard}>
                <Text style={TYPOGRAPHY.Card.Heading}>{data.title}</Text>
                <Text style={[TYPOGRAPHY.Card.Body, {marginVertical: 10}]}>{data.description}</Text>
            
                <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: data.image ? 50 : 0 }}>
                    <Text style={TYPOGRAPHY.BodyInfo}>By: {data.author}</Text>
                    <Text style={TYPOGRAPHY.Card.Muted}>{data.uploadTime}</Text>
                </View>
            </View>
            {data.image &&
                <Image style={{flex: 1, resizeMode: "contain", maxHeight: 200, borderRadius: 20, marginTop: -50}} source={{
                    uri: "https://miro.medium.com/v2/resize:fit:754/1*78erRW_c48p2HqM3ShQfwQ.jpeg"
                }} />
            }
        </TouchableOpacity>
    )
}

export default () => {


    return (
        <SafeAreaView style={[LAYOUTS.flexCenter, LAYOUTS.screenView, { backgroundColor: COLORS.primaryLight, position: "relative", }]}>
            <StatusBar style={"dark"} />

            <Text style={[TYPOGRAPHY.Heading, {marginBottom: 20}]}>Trending Blogs 🔥</Text>

            <BlogCard data={BlogCards[0]} />
            <BlogCard data={BlogCards[1]} />

            {/* {BlogCards.map(blog => {
                <BlogCard key={blog.id} data={blog} />
            })} */}

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    blogCard: {
        backgroundColor: "transparent",
        borderWidth: 2,
        borderColor: COLORS.primaryDark,
        borderRadius: 20,
        padding: 20
    }
});

