import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { COLORS, TYPOGRAPHY } from '../theme/theme';

const HorizontalFilters = ({ userInput }) => {
    const [selectedFilters, setSelectedFilters] = useState({});

    const handleFilterChange = (key, value) => {
        setSelectedFilters({ ...selectedFilters, [key]: value });
    };

    const renderFilter = ({ item }) => {
        const { key, value } = item;
        return (
            <View style={styles.pill}>
                <Text style={TYPOGRAPHY.Card.Muted}>{key}</Text>
                <Picker
                    selectedValue={selectedFilters[key]}
                    style={styles.picker}
                    onValueChange={(itemValue, itemIndex) => handleFilterChange(key, itemValue)}
                >
                    {value.map((option, optionIndex) => (
                        <Picker.Item key={optionIndex} label={option} value={option} />
                    ))}
                </Picker>
            </View>
        );
    };

    return (
        <FlatList
            data={Object.entries(userInput).map(([key, value]) => ({ key, value }))}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.container}
            renderItem={renderFilter}
            keyExtractor={(item) => item.key}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
    },
    picker: {
        width: 200,
        color: COLORS.primaryDark,
    },
});

export default HorizontalFilters;
