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
import DestinationStationFlatLIst from "../FlatList/DestinationStationFlatLIst";

export default function TrainDestinationButton() {
    return (
        <DestinationStationFlatLIst url={'https://ptubus.com/server/train/station/'}/>
    );
}
