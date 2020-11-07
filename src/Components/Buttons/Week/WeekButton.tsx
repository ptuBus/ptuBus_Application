import React, {Component} from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

export default function WeekButton(props){
    return (
        <TouchableOpacity
            style={[styles.button, {backgroundColor: props.buttonColor}]}
            onPress={props.onPress}>
            <Text style={[styles.title, {color: props.titleColor}]}>
                {props.title}
            </Text>
        </TouchableOpacity>
    );

}

const styles = StyleSheet.create({
    button: {
        width: '13%',
        height: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        borderColor: '#AAA',
        borderWidth: 0.5,
        backgroundColor: '#2195FF',
        color: '#FFF',
    },
    title: {
        fontSize: 15,
    },
});
