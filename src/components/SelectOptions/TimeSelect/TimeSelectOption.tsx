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
    that.setState({
      date:
        year +
        '년 ' +
        month +
        '월 ' +
        date +
        '일 ' +
        '(' +
        daylabel +
        ') ' +
        hours +
        ':' +
        min,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.toptext}>출발시간</Text>
        <TouchableOpacity
          onPress={() => {
            this.setState({
              bottomModalAndTitle: true,
            });
          }}>
          <Text style={styles.timeselect}>{this.state.date}</Text>
        </TouchableOpacity>

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
  toptext: {
    top: '-90%',
    color: '#8B8B8B',
  },
  timeselect: {
    fontSize: 17,
  },
});
