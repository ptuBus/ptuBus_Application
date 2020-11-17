import React, {useEffect, useState} from 'react';
import {
    ActivityIndicator,
    FlatList,
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View, TouchableOpacity,
    Text,
    Alert
} from 'react-native';
import DestinationStationFlatList from "../FlatList/DestinationStationFlatLIst";

export default function TrainDestinationButton() {
    return (
        <DestinationStationFlatList url={'https://ptubus.com/server/train/station/'} />
    );
}
