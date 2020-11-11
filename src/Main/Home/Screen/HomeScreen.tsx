import React from 'react';
import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';

export default function HomeScreen({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainText}>
        <Text style={{fontSize: 28, fontWeight: '600'}}>
          이용하실 교통수단을 {'\n'}골라주세요!
        </Text>
      </View>
      <View style={styles.ButtonLayer}>
        <Button title={'스쿨버스'} onPress={() => navigation.navigate('')} />
        <Button
          title={'고속/시외버스'}
          onPress={() => navigation.navigate('')}
        />
        <Button title={'시내버스'} onPress={() => navigation.navigate('')} />
        <Button title={'지하철'} onPress={() => navigation.navigate('')} />
      </View>
      <View style={styles.ButtonLayer}>
        <Button title={'기차'} onPress={() => navigation.navigate('')} />
        <Button onPress={() => navigation.navigate('')} title={''} />
        <Button onPress={() => navigation.navigate('')} title={''} />
        <Button onPress={() => navigation.navigate('')} title={''} />
      </View>
      <View style={styles.Weather}>
        <Text>날씨 위젯 들어올거라누 ㅋ</Text>
      </View>
      <View style={styles.Advertise}>
        <Text>광고 넣을거라누 ㅋ</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCFCFC',
  },
  mainText: {
    height: '20%',
    justifyContent: 'flex-end',
    left: '8%',
  },
  ButtonLayer: {
    height: '22%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  ButtonLayer2: {
    height: '22%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  Weather: {
    height: '24%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
  },
  Advertise: {
    height: '12%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
  },
});
