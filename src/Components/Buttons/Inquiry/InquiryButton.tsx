import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

export default function InquiryButton(props){
  const defaultProps = {
    titleColor: '#FFF',
    buttonColor: '#2195FF',
    title: '조회하기',
  };
  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: defaultProps.buttonColor}]}
      onPress={props.onPress}>
      <Text style={[styles.title, {color: defaultProps.titleColor}]}>
        {defaultProps.title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '95%',
    height: '55%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  title: {
    fontSize: 17,
  },
});
