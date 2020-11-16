import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import ArrivalButton from "../../../Components/Buttons/ArrivalButton";
import InquiryButton from "../../../Components/Buttons/InquiryButton";
import DepartureButton from "../../../Components/Buttons/DepartureButton";

export default function TrainScreen({navigation, route}) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.card}>
                <View style={styles.selectDest}>
                    <DepartureButton />
                    <ArrivalButton
                        title={route.params.endStationName}
                    />
                </View>
                <View style={styles.selectTime}>

                </View>
                <View style={styles.selectWeek}>

                </View>
                <View style={styles.InquiryBtnSector}>
                    <InquiryButton
                        onPress={() => navigation.navigate('기차시간표')}
                        width={'95%'}
                        height={'55%'}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
}

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
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#AAAAAA',
        borderTopWidth: 0.5,
    },
    selectWeek: {
        backgroundColor: '#FFF',
        width: '100%',
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#AAAAAA',
        borderTopWidth: 0.5,
    },
    InquiryBtnSector: {
        backgroundColor: '#FFFFFF',
        width: '100%',
        flex: 1.3,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#AAAAAA',
        borderTopWidth: 0.5,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
});
