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

export default class DestinationButton extends Component {
  static defaultProps = {
    buttonColor: '#FFF',
    title: 'untitled',
    titleColor: '#0012AF',
    subtitle: 'untitled',
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
            style={[styles.button, {backgroundColor: this.props.buttonColor}]}
            onPress={() => {
              this.setState({
                bottomModalAndTitle: true,
              });
            }}>
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
              <Text>Bottom Modal with Title</Text>
            </ModalContent>
          </Modal.BottomModal>
        </TouchableOpacity>
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
