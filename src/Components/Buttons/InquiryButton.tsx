import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

export default function InquiryButton(props){
    const defaultProps = {
        titleColor: '#FFF',
        buttonColor: '#2195FF',
        title: '조회하기',
        width: '',
        height: '',
    };
    return (
        <TouchableOpacity
            style={[styles.button, {backgroundColor: defaultProps.buttonColor,
                width: props.width, height: props.height}]}
            onPress={props.onPress}>
            <Text style={[styles.title, {color: defaultProps.titleColor}]}>
                {defaultProps.title}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    title: {
        fontSize: 17,
    },
});
