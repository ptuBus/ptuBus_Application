import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

export default class DestinationButton extends Component {
  static defaultProps = {
    buttonColor: '#FFF',
    title: 'untitled',
    subtitle: 'untitled',
    onPress: () => null,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity
        style={[styles.button, {backgroundColor: this.props.buttonColor}]}
        onPress={this.props.onPress}>
        <Text style={styles.subtitle}>{this.props.subtitle}</Text>
        <Text style={styles.title}>{this.props.title}</Text>
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
});
