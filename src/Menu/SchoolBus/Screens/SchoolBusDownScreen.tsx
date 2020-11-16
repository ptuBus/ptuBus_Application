import React, {useEffect, useState} from 'react';
import {
    ActivityIndicator,
    FlatList,
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View
} from 'react-native';
import SchoolBusFlatList from "../../../Components/SchoolBusFlatList";
export default function SchoolBusDownScreen() {
    return(
        <SchoolBusFlatList
            url={'https://ptubus.com/server/schoolbus/?startStationID=1&endStationID=0&upDownTypeCode=D'}
        />
    );
}
