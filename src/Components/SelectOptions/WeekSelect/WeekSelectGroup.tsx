import React, {Component} from 'react';
import {Alert, Button, StyleSheet, Text, View} from 'react-native';
import WeekButton from '../../Buttons/WeekButton';
import InquiryButton from '../../Buttons/InquiryButton';

export default class WeekSelectGroup extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.toptext}>요일선택</Text>
                <Text style={styles.buttongroup}>요일선택 버튼그룹</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    toptext: {
        top: '-90%',
        color: '#8B8B8B',
    },
    buttongroup: {
        fontSize: 17,
    },
});
