import React from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';
import Modal, {
    ModalContent,
} from 'react-native-modals';
import TrainDestinationButton from "../Buttons/TrainDestinationButton";

export default function SelectDestinationModal({ show, onClose }) {
    return (
        <View>
            <Modal.BottomModal
                visible={show}
                onTouchOutside={onClose}
                onSwipeOut={onClose}
                height={0.5}
                width={1}
            >
                <ModalContent
                    style={{
                        flex: 1,
                        backgroundColor: '#fff',
                    }}>
                    <View style={styles.TextInputLayer}>
                        <TextInput
                            style={styles.input}
                            placeholder="도착역 이름을 검색하세요."
                        />
                    </View>
                    <View style={styles.DataLayer}>
                        <View style={styles.DataButtonLayer}>
                            <TrainDestinationButton />
                        </View>
                        <View style={styles.DataSearchLayer}>
                            <Text>데이터 선택 레이어</Text>
                        </View>
                    </View>
                </ModalContent>
            </Modal.BottomModal>
        </View>

    );
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: '#E9E9E9',
        height: '80%',
        padding: '5%',
        top: '-15%',
        borderRadius: 10,
        fontSize: 17,
    },
    TextInputLayer: {
        flex: 1,
        justifyContent: 'center',
        borderBottomWidth: 0.5,
        borderColor: '#AAA',
    },
    DataLayer: {
        flex: 5,
        flexDirection: 'row',
    },
    DataButtonLayer: {
        flex: 5,
    },
    DataSearchLayer: {
        borderColor: '#AAA',
        borderLeftWidth: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
});


