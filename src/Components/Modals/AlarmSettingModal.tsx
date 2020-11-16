import React, {useEffect, useState} from 'react';
import {View, StyleSheet, TouchableOpacity, Text, Image} from 'react-native';
import Modal, {
    ModalTitle,
    ModalContent,
} from 'react-native-modals';

export default function AlarmSettingModal({ show, onClose }) {
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


