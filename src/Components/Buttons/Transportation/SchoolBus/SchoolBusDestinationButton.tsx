import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity, Text, Image} from 'react-native';
import Modal, {
    ModalTitle,
    ModalContent,
} from 'react-native-modals';

export default function SchoolBusDestinationButton(props) {
    const [bottomModalAndTitle, setBottomModalAndTitle] = useState(false);
    return (
        <View style={{flex:1, flexDirection: 'row'}}>
            <TouchableOpacity
                style={styles.container}
                onPress={() => {
                    setBottomModalAndTitle(true);
                }}>
                <View style={styles.Info}>
                    <Text style={styles.timeItem}>{props.schedule} </Text>
                </View>
                <View style={styles.Info}>
                    <Text style={styles.stationNameItem}>
                        {props.startStationName}{' '}
                    </Text>
                </View>
                <View />

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

                <TouchableOpacity
                    style={styles.scontainer}
                    activeOpacity={0.5}
                    onPress={() => {
                        setBottomModalAndTitle(true);
                    }}>
                    <View style={styles.iconBox} >
                        <Image
                            style={styles.ImageIconStyle}
                            source={require('../../../Images/star.png')}
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
        // backgroundColor: 'yellow',
    },
    scontainer: {
        flex:1,
        justifyContent: 'center',
        alignContent: 'center',
        paddingLeft: "20%",
        // backgroundColor: 'blue',
    },
    ImageIconStyle:{
        resizeMode: "contain",
        height: "100%",
        width: "100%",
        // backgroundColor: 'powderblue',
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
        // backgroundColor: 'green',
        width: '40%',
        height: '40%',
    },
});
