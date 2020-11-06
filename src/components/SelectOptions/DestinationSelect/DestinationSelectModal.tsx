import React, {Component} from 'react';
import {Button, View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import Modal, {
  ModalTitle,
  ModalContent,
  ModalFooter,
  ModalButton,
  SlideAnimation,
  ScaleAnimation,
} from 'react-native-modals';
import TrainStationButtonGroup from '../../Buttons/TrainStationButtonGroup';

export default class DestinationSelectModal extends Component {
  state = {
    customBackgroundModal: false,
    defaultAnimationModal: false,
    swipeableModal: false,
    scaleAnimationModal: false,
    slideAnimationModal: false,
    bottomModalAndTitle: true,
    bottomModal: false,
  };

  render() {
    return (
      <View style={{flex: 1}}>
        {/*<View style={styles.container}>*/}
        {/*  <Button*/}
        {/*    title="Bottom Modal with Title"*/}
        {/*    onPress={() => {*/}
        {/*      this.setState({*/}
        {/*        bottomModalAndTitle: true,*/}
        {/*      });*/}
        {/*    }}*/}
        {/*  />*/}
        {/*</View>*/}
        <Text style={styles.subtitle}>{this.props.subtitle}</Text>
        <Text style={[styles.title, {color: this.props.titleColor}]}>
          {this.props.title}
        </Text>

        <Modal.BottomModal
          visible={this.state.bottomModalAndTitle}
          onTouchOutside={() => this.setState({bottomModalAndTitle: false})}
          height={0.5}
          width={1}
          onSwipeOut={() => this.setState({bottomModalAndTitle: false})}>
          <ModalContent
            style={{
              flex: 1,
              backgroundColor: 'fff',
            }}>
            <View style={styles.TextInputLayer}>
              <TextInput
                style={styles.input}
                placeholder="도착역 이름을 검색하세요."
              />
            </View>
            <View style={styles.DataLayer}>
              <View style={styles.DataButtonLayer}>
                <TrainStationButtonGroup />
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
}

const styles = StyleSheet.create({
  button: {
    width: '50%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: '500',
  },
  subtitle: {
    top: '-25%',
    color: '#8B8B8B',
  },
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