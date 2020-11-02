import React, {Component} from 'react';
import {Alert, StyleSheet, Text, View} from 'react-native';
import WeekButton from '../../Buttons/WeekButton';

export default class WeekSelectGroup extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/*<Text style={styles.toptext}>요일선택</Text>*/}
        <View style={styles.toptextlayer}>
          <Text style={styles.toptext}>요일선택</Text>
        </View>
        <View style={styles.buttonlayer}>
          <WeekButton buttonColor={'#FFF'} title={'월'} titleColor={'#000'} />
          <WeekButton buttonColor={'#FFF'} title={'화'} titleColor={'#000'} />
          <WeekButton buttonColor={'#FFF'} title={'수'} titleColor={'#000'} />
          <WeekButton buttonColor={'#FFF'} title={'목'} titleColor={'#000'} />
          <WeekButton buttonColor={'#FFF'} title={'금'} titleColor={'#000'} />
          <WeekButton buttonColor={'#FFF'} title={'토'} titleColor={'#000'} />
          <WeekButton buttonColor={'#FFF'} title={'일'} titleColor={'#000'} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  toptext: {
    color: '#8B8B8B',
    top: '10%',
  },
  buttongroup: {
    fontSize: 17,
  },
  toptextlayer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonlayer: {
    flex: 2,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
