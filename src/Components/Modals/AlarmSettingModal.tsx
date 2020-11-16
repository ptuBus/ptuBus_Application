import React, {useEffect, useState} from 'react';
import {View, StyleSheet, TouchableOpacity, Text, Image, Button} from 'react-native';
import Modal, {
    ModalTitle,
    ModalContent,
} from 'react-native-modals';

export default function AlarmSettingModal({ show, onClose, schedule, startStationName }) {
    // const defaultProps = {
    //     schedule: 'sss',
    //     startStationName: 'sss',
    // };

    return (
              <View>
                  <Modal.BottomModal
                      visible={show}
                      onTouchOutside={onClose}
                      onSwipeOut={onClose}
                      height={0.95}
                      width={1}
                  >
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
                              <Text style={styles.alarm}>{startStationName}</Text>
                          </View>
                          <View style={styles.settingAlarmLayout}>
                              <Text style={styles.alarm}>{schedule}</Text>
                          </View>
                          <View style={styles.settingAlarmLayout}>
                              <Button title={'푸쉬알람'}  onPress={onClose}/>
                          </View>
                      </ModalContent>
                  </Modal.BottomModal>
              </View>

    );
}

const styles = StyleSheet.create({
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


