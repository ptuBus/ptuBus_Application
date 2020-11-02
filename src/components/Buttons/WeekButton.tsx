import React, {Component} from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

export default class WeekButton extends Component {
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
    width: '13%',
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    borderColor: '#AAA',
    borderWidth: 0.5,
  },
  title: {
    fontSize: 15,
  },
});
