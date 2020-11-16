import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

export default function DepartureButton(){
    const defaultProps = {
        title: '평택',
        subtitle: '출발',
    };
    return (
        <TouchableOpacity
            style={styles.button}
            onPress={() => null}>
            <Text style={styles.subtitle}>{defaultProps.subtitle}</Text>
            <Text style={styles.title}>
                {defaultProps.title}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        width: '50%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        backgroundColor: '#FFF',
    },
    title: {
        fontSize: 30,
        fontWeight: '500',
    },
    subtitle: {
        top: '-25%',
        color: '#8B8B8B',
    },
});
