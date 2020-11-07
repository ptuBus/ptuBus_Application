import React, {Component} from 'react';
import {Button, View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import Modal, {
    ModalTitle,
    ModalContent,
    ModalFooter,
    ModalButton,
    SlideAnimation,
    ScaleAnimation,
} from 'react-native-modals';

export default class SchoolBusDestinationButton extends Component {
    static defaultProps = {
        schedule: '00:00',
        startStationName: '',
        endStationName: '',
        onPress: () => null,
    };

    state = {
        bottomModalAndTitle: false,
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TouchableOpacity
                onPress={() => {
                    this.setState({
                        bottomModalAndTitle: true,
                    });
                }}>
                <View style={styles.container}>
                    <View style={styles.Info}>
                        <Text style={styles.timeItem}>{this.props.schedule} </Text>
                    </View>
                    <View style={styles.Info}>
                        <Text style={styles.stationNameItem}>
                            {this.props.startStationName}{' '}
                        </Text>
                    </View>
                    <View />
                </View>

                <Modal.BottomModal
                    visible={this.state.bottomModalAndTitle}
                    onTouchOutside={() => this.setState({bottomModalAndTitle: false})}
                    height={0.95}
                    width={1}
                    onSwipeOut={() => this.setState({bottomModalAndTitle: false})}>
                    <ModalTitle
                        title="대중교통 알림설정"
                        align="center"
                        backgroundcolor="#F3F3F3"
                    />
                    <ModalContent
                        style={{
                            flex: 1,
                            backgroundColor: 'white',
                        }}>
                        <View style={styles.content}>
                            <View>
                                <Text style={styles.alarm}>알람주기</Text>
                            </View>
                            <View>
                                <Text style={styles.alarm}>다시알람</Text>
                            </View>
                            <View>
                                <Text style={styles.alarm}>푸시알람</Text>
                            </View>
                        </View>
                    </ModalContent>
                </Modal.BottomModal>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    itemView: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderRadius: 15,
        backgroundColor: '#FFFFFF',
        width: '100%',
        height: '17%',
        margin: 5,
    },
    Info: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
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
    content: {
        width: '100%',
        height: '24%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#d6ca1a',
    },
    alarm: {
        width: '100%',
        height: '33%',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
});