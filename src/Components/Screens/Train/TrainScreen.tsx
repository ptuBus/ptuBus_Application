import React, {useState} from 'react';
import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {DestinationButton, InquiryButton} from '../../Buttons';

export default function TrainScreen({navigation}) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.card}>
                <View style={styles.selectDest}>
                    <DestinationButton
                        buttonColor={'#FFF'}
                        subtitle={'출발'}
                        title={'평택'}
                        onPress={() => null}
                    />
                    <DestinationButton
                        buttonColor={'#FFF'}
                        subtitle={'도착'}
                        title={'서울'}
                        onPress={() => alert('서울역')}
                    />
                </View>
                <View style={styles.selectTime}>
                    <Text>출발시간선택 레이아웃</Text>
                </View>
                <View style={styles.selectWeek}>
                    <Text>요일선택 레이아웃</Text>
                </View>
                <View style={styles.InquiryBtnSector}>
                    <InquiryButton
                        buttonColor={'#2195FF'}
                        title={'조회하기'}
                        onPress={() => navigation.navigate('기차시간표')}
                    />
                </View>
                {/*<DatePicker date={date} onDateChange={setDate} mode={'time'} />*/}
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FCFCFC',
        alignItems: 'center',
    },
    card: {
        backgroundColor: '#fff',
        borderColor: '#AAAAAA',
        borderRadius: 10,
        borderWidth: 0.5,
        width: 350,
        height: '70%',
        top: 100,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    selectDest: {
        backgroundColor: '#FFF',
        width: '100%',
        height: '35%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    selectTime: {
        backgroundColor: 'blue',
        width: '100%',
        height: '24%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    selectWeek: {
        backgroundColor: 'green',
        width: '100%',
        height: '24%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    InquiryBtnSector: {
        backgroundColor: '#FFFFFF',
        width: '100%',
        height: '17%',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
});
