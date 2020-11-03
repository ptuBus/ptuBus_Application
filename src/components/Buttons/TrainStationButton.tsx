import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';

export default class DestinationButton extends Component {
  static defaultProps = {
    endStationName: '',
    onPress: () => null,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity
        onPress={() => {
          this.setState({
            bottomModalAndTitle: true,
          });
        }}>
        <View style={styles.Info}>
          <Text style={styles.endStationNameItem}>
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
