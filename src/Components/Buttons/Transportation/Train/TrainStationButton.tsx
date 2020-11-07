import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text,  Alert} from 'react-native';

export default function TrainStationButton(props) {
    return (
            <TouchableOpacity
                onPress={() =>
                    Alert.alert(props.endStationName)
                }>
                <View style={styles.Info}>
                    <Text
                        adjustsFontSizeToFit
                        numberOfLines={1}
                        style={styles.endStationNameItem}>
                        {props.endStationName}
                    </Text>
                </View>
            </TouchableOpacity>
        );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    Info: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    endStationNameItem: {
        fontSize: 15,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
