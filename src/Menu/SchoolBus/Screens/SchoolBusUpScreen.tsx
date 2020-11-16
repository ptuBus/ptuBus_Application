import React, {useEffect, useState} from 'react';
import {
    ActivityIndicator,
    FlatList,
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
} from 'react-native';
import SchoolBusFlatList from "../../../Components/SchoolBusFlatList";

export default function SchoolBusUpScreen() {
    return(
        <SchoolBusFlatList
        url={'https://ptubus.com/server/schoolbus/?startStationID=0&endStationID=1&upDownTypeCode=U'}/>
    );
}
