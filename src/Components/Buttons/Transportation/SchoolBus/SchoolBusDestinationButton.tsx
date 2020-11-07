import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import Modal, {
    ModalTitle,
    ModalContent,
} from 'react-native-modals';

export default function SchoolBusDestinationButton(props) {
    const [bottomModalAndTitle, setBottomModalAndTitle] = useState(false);
    return (
        <TouchableOpacity
            onPress={() => {
                setBottomModalAndTitle(true);
            }}>
            <View style={styles.container}>
                <View style={styles.Info}>
                    <Text style={styles.timeItem}>{props.schedule} </Text>
                </View>
                <View style={styles.Info}>
                    <Text style={styles.stationNameItem}>
                        {props.startStationName}{' '}
                    </Text>
                </View>
                <View />
            </View>

            <Modal.BottomModal
                visible={bottomModalAndTitle}
                onTouchOutside={() => setBottomModalAndTitle(false)}
                height={0.95}
                width={1}
                onSwipeOut={() => setBottomModalAndTitle(false)}>
                <ModalTitle
                    title="대중교통 알림설정"
                    align="center"
                    backgroundcolor="#F3F3F3"
                />
                <ModalContent
                    style={{
                        flex: 1,
                        backgroundColor: 'yellow',
                    }}>
                    <View style={styles.settingAlarmLayout}>
                        <Text style={styles.alarm}>알람주기</Text>
                    </View>
                    <View style={styles.settingAlarmLayout}>
                        <Text style={styles.alarm}>다시알람</Text>
                    </View>
                    <View style={styles.settingAlarmLayout}>
                        <Text style={styles.alarm}>푸시알람</Text>
                    </View>
                </ModalContent>
            </Modal.BottomModal>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
});
