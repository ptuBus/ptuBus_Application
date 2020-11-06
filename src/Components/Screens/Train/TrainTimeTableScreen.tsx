import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

export default function TrainTimeTableScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.DestInfo}>
                <Text style={{fontSize: 16, color: 'white'}}>평택 - 서울</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FCFCFC',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    DestInfo: {
        backgroundColor: '#2195FF',
        width: '100%',
        height: '6%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    DestInfoText: {
        color: '#FFF',
    },
});
