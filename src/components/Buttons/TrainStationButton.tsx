import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity, Text, Alert} from 'react-native';

export default class DestinationButton extends Component {
  static defaultProps = {
    endStationName: '',
    onPress: () => null,
  };

  constructor(props) {
    super(props);
    this.state = {
      endStationName: '',
    };
  }

  render() {
    return (
      <TouchableOpacity
        onPress={() => Alert.alert(this.props.endStationName)
        }>
        <View style={styles.Info}>
          <Text
            adjustsFontSizeToFit
            numberOfLines={1}
            style={styles.endStationNameItem}>
            {this.props.endStationName}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Info: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  endStationNameItem: {
    fontSize: 15,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
