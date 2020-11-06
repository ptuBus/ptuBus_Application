import React from 'react';
import 'react-native-gesture-handler';
import {Text, SafeAreaView, StyleSheet} from 'react-native';

export default function FavoritesTabScreen() {
    return (
        <SafeAreaView style={style.container}>
            <Text style={style.homeText}>즐겨찾기</Text>
        </SafeAreaView>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FCFCFC',
        alignContent: 'center',
        justifyContent: 'center',
    },
    homeText: {
        position: 'absolute',
        width: 238,
        height: 76,
        left: 29,
        top: 137,
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 28,
        // letterSpacing: -0.24,
    },
});
