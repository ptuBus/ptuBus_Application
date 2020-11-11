import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import * as Buttons from '../../../Components';
export default function SubwayLeastDistanceScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.searchBoxLayer}>
                <View style={styles.searchBox}>
                    <View style={styles.departureLayer}>
                        <Text style={{fontSize: 18, padding: '6%'}}>출발</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="출발역을 입력하세요"
                        />
                    </View>
                    <View style={styles.arrivalLayer}>
                        <Text style={{fontSize: 18, padding: '6%'}}>도착</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="도착역을 입력하세요"
                        />
                    </View>
                </View>
            </View>
            <View style={styles.inquiryBtnLayer}>
                <Buttons.InquiryButton
                    width={'90%'}
                    height={'90%'}
                />
            </View>
            <View style={styles.cardLayer}>
                <View style={styles.card}>

                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    searchBoxLayer: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    departureLayer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    input: {
        backgroundColor: '#E9E9E9',
        width: '75%',
        height: '70%',
        paddingLeft: '5%',
        marginRight: '20%',
        borderRadius: 10,
        fontSize: 15,
    },
    arrivalLayer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    searchBox: {
        width: '90%',
        height: '85%',
        top: '5%',
        backgroundColor: '#FFF',
        borderWidth: 0.5,
        borderColor: '#AAA',
        borderRadius: 10,
    },
    inquiryBtnLayer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardLayer: {
        flex: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        width: '90%',
        height: '95%',
        backgroundColor: '#FFF',
        borderWidth: 0.5,
        borderColor: '#AAA',
        borderRadius: 10,
    }
});
