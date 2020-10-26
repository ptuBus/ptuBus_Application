import React, {Component} from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

export default class InquiryButton extends Component {
  static defaultProps = {
    buttonColor: '#2195FF',
    titleColor: '#FFF',
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
        <Text style={[styles.title, {color: this.props.titleColor}]}>
          {this.props.title}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    width: '95%',
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    borderRadius: 10,
  },
  title: {
    fontSize: 17,
  },
});
