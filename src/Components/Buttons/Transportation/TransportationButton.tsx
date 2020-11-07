import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

export default function TransportationButton(props){
    return (
      <TouchableOpacity
        style={[styles.button, {backgroundColor: props.buttonColor}]}
        onPress={props.onPress}>
        <Text style={[styles.title, {color: props.titleColor}]}>
          {props.title}
        </Text>
      </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    borderRadius: 5,
  },
  title: {
    fontSize: 15,
  },
});
