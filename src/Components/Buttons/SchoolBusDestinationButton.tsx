import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity, Text, Image} from 'react-native';
import AlarmSettingModal from "../Modals/AlarmSettingModal";

export default function SchoolBusDestinationButton(props) {
    const [showModal, setShowModal] = useState(false);
    const onClose = () => setShowModal(false);

    return (
        <View style={{flex:1, flexDirection: 'row'}}>
            <TouchableOpacity
                style={styles.container}
                onPress={() => (
                    setShowModal(true)
                )}>
                <View style={styles.Info}>
                    <Text style={styles.timeItem}>{props.schedule} </Text>
                </View>
                <View style={styles.Info}>
                    <Text style={styles.stationNameItem}>
                        {props.startStationName}{' '}
                    </Text>
                </View>
                <AlarmSettingModal show={showModal} onClose={onClose}/>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.scontainer}
                activeOpacity={0.5}
                onPress={() =>
                    null
                }>
                <View style={styles.iconBox} >
                    <Image
                        style={styles.ImageIconStyle}
                        source={require('../Images/unselectstar.png')}
                    />
                </View>
            </TouchableOpacity>

        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 5,
        justifyContent: 'center',
        width: "89%",
    },
    scontainer: {
        flex:1,
        justifyContent: 'center',
        alignContent: 'center',
        paddingLeft: "20%",
    },
    ImageIconStyle:{
        resizeMode: "contain",
        height: "100%",
        width: "100%",
    },
    Info: {
        justifyContent: 'center',
    },
    stationNameItem: {
        fontSize: 12,
        paddingLeft: 29,
        paddingTop: 1,
        paddingBottom: 10,
        color: '#979797',
    },
    timeItem: {
        fontSize: 17,
        fontWeight: '600',
        paddingLeft: 29,
        paddingTop: 10,
    },
    settingAlarmLayout: {
        borderWidth: 0.5,
        borderColor: '#AAA',
        height: '10%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    alarm: {
        justifyContent: 'center',
    },
    iconBox: {
        width: '40%',
        height: '40%',
    },
});
