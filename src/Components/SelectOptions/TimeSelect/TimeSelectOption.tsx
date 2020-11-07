import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Modal, {
    ModalTitle,
    ModalContent,
    ModalFooter,
    ModalButton,
    SlideAnimation,
    ScaleAnimation,
} from 'react-native-modals';
import TimePicker from './TimePicker';

export default class TimeSelectOption extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: '',
            bottomModalAndTitle: false,
        };
    }
    componentDidMount() {
        const week = new Array('일', '월', '화', '수', '목', '금', '토');

        const that = this;
        const date = new Date().getDate(); //Current Date
        const month = new Date().getMonth() + 1;
        const year = new Date().getFullYear();
        const hours = new Date().getHours();
        const min = new Date().getMinutes();
        const daynumber = new Date().getDay();
        const daylabel = week[daynumber];
        const zerofill_date = date < 10 ? '0' + date : date;
        const zerofill_hours = hours < 10 ? '0' + hours : hours;
        const zerofill_min = min < 10 ? '0' + min : min;
        that.setState({
            date:
                year +
                '년 ' +
                month +
                '월 ' +
                zerofill_date +
                '일 ' +
                '(' +
                daylabel +
                ') ' +
                zerofill_hours +
                ':' +
                zerofill_min,
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.topTextLayer}>
                    <Text style={styles.topText}>출발시간</Text>
                </View>
                <View style={styles.timeSelectLayer}>
                    <TouchableOpacity
                        onPress={() => {
                            this.setState({
                                bottomModalAndTitle: true,
                            });
                        }}>
                        <Text style={styles.timeSelect}>{this.state.date}</Text>
                    </TouchableOpacity>
                </View>

                <Modal.BottomModal
                    visible={this.state.bottomModalAndTitle}
                    onTouchOutside={() => this.setState({bottomModalAndTitle: false})}
                    height={0.3}
                    width={1}
                    onSwipeOut={() => this.setState({bottomModalAndTitle: false})}
                    modalTitle={<ModalTitle title="시간선택" hasTitleBar />}>
                    <ModalContent
                        style={{
                            flex: 1,
                            backgroundColor: 'fff',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                        <TimePicker />
                    </ModalContent>
                </Modal.BottomModal>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    topText: {
        justifyContent: 'center',
        color: '#8B8B8B',
    },
    timeSelect: {
        fontSize: 17,
    },
    topTextLayer: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    timeSelectLayer: {
        flex: 2,
        width: '100%',
        top: '12%',
        alignItems: 'center',
    },
});
