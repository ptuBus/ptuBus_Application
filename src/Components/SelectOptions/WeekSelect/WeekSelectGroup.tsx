import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {WeekButton} from '../../Buttons';

export default class WeekSelectGroup extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.topTextLayer}>
                    <Text style={styles.topText}>요일선택</Text>
                </View>
                <View style={styles.buttonLayer}>
                    <WeekButton buttonColor={'#FFF'} title={'월'} titleColor={'#000'} />
                    <WeekButton buttonColor={'#FFF'} title={'화'} titleColor={'#000'} />
                    <WeekButton buttonColor={'#FFF'} title={'수'} titleColor={'#000'} />
                    <WeekButton buttonColor={'#FFF'} title={'목'} titleColor={'#000'} />
                    <WeekButton buttonColor={'#FFF'} title={'금'} titleColor={'#000'} />
                    <WeekButton buttonColor={'#FFF'} title={'토'} titleColor={'#000'} />
                    <WeekButton buttonColor={'#FFF'} title={'일'} titleColor={'#000'} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    topText: {
        color: '#8B8B8B',
        top: '10%',
    },
    buttongroup: {
        fontSize: 17,
    },
    topTextLayer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonLayer: {
        flex: 2,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },
});
