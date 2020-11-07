import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import * as Buttons from '../../Buttons';
import {TimeSelectOption, WeekSelectGroup} from '../../SelectOptions';

export default function TrainScreen({navigation}) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.card}>
                <View style={styles.selectDest}>
                    <Buttons.ArrivalButton
                        buttonColor={'#FFF'}
                        subtitle={'출발'}
                        title={'평택'}
                        titleColor={'#000'}
                    />
                    <Buttons.DestinationButton
                        buttonColor={'#FFF'}
                        subtitle={'도착'}
                        title={'서울'}
                        titleColor={'#0012AF'}
                    />
                </View>
                <View style={styles.selectTime}>
                    <TimeSelectOption />
                </View>
                <View style={styles.selectWeek}>
                    <WeekSelectGroup />
                </View>
                <View style={styles.InquiryBtnSector}>
                    <Buttons.InquiryButton
                        buttonColor={'#2195FF'}
                        title={'조회하기'}
                        onPress={() => navigation.navigate('기차시간표')}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
}

export default TrainScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#FCFCFC',
        alignItems: 'center',
    },
    card: {
        backgroundColor: '#fff',
        borderColor: '#AAAAAA',
        borderRadius: 10,
        borderWidth: 0.5,
        width: '85%',
        height: '70%',
        top: '14%',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    selectDest: {
        backgroundColor: '#FFF',
        width: '100%',
        // height: '35%',
        flex: 3,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    selectTime: {
        backgroundColor: '#FFF',
        width: '100%',
        // height: '24%',
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#AAAAAA',
        borderTopWidth: 0.5,
    },
    selectWeek: {
        backgroundColor: '#FFF',
        width: '100%',
        // height: '24%',
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#AAAAAA',
        borderTopWidth: 0.5,
    },
    InquiryBtnSector: {
        backgroundColor: '#FFFFFF',
        width: '100%',
        // height: '17%',
        flex: 1.3,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#AAAAAA',
        borderTopWidth: 0.5,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
});
