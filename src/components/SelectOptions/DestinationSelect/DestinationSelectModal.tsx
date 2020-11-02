import React, {Component} from 'react';
import {Button, View, Text, StyleSheet} from 'react-native';
import Modal, {
  ModalTitle,
  ModalContent,
  ModalFooter,
  ModalButton,
  SlideAnimation,
  ScaleAnimation,
} from 'react-native-modals';

export default class DestinationSelectModal extends Component {
  state = {
    customBackgroundModal: false,
    defaultAnimationModal: false,
    swipeableModal: false,
    scaleAnimationModal: false,
    slideAnimationModal: false,
    bottomModalAndTitle: false,
    bottomModal: false,
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={styles.container}>
          <Button
            title="Bottom Modal with Title"
            onPress={() => {
              this.setState({
                bottomModalAndTitle: true,
              });
            }}
          />
        </View>

        <Modal.BottomModal
          visible={this.state.bottomModalAndTitle}
          onTouchOutside={() => this.setState({bottomModalAndTitle: false})}
          height={0.5}
          width={1}
          onSwipeOut={() => this.setState({bottomModalAndTitle: false})}
          modalTitle={<ModalTitle title="Bottom Modal" hasTitleBar />}>
          <ModalContent
            style={{
              flex: 1,
              backgroundColor: 'fff',
            }}>
            <Text>도착역검색</Text>
          </ModalContent>
        </Modal.BottomModal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dialogContentView: {
    paddingLeft: 18,
    paddingRight: 18,
  },
  navigationBar: {
    borderBottomColor: '#b5b5b5',
    borderBottomWidth: 0.5,
    backgroundColor: '#ffffff',
  },
  navigationTitle: {
    padding: 10,
  },
  navigationButton: {
    padding: 10,
  },
  navigationLeftButton: {
    paddingLeft: 20,
    paddingRight: 40,
  },
  navigator: {
    flex: 1,
    // backgroundColor: '#000000',
  },
  customBackgroundModal: {
    opacity: 0.5,
    backgroundColor: '#000',
  },
});
