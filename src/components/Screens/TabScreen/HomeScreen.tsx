import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import CustomButtons from '../../Buttons/TransportationButton';
import TransportationButton from '../../Buttons/TransportationButton';

function HomeScreen({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.Maintext}>
        <Text style={{fontSize: 28, fontWeight: '600'}}>
          이용하실 교통수단을 {'\n'}골라주세요!
        </Text>
      </View>
      <View style={styles.ButtonLayer}>
        <TransportationButton
          buttonColor={'#FCFCFC'}
          title={'스쿨버스'}
          onPress={() => navigation.navigate('스쿨버스')}
        />
        <TransportationButton
          buttonColor={'#FCFCFC'}
          title={'고속/시외버스'}
          onPress={() => navigation.navigate('고속/시외버스')}
        />
        <TransportationButton
          buttonColor={'#FCFCFC'}
          title={'시내버스'}
          onPress={() => navigation.navigate('시내버스')}
        />
        <TransportationButton
          buttonColor={'#FCFCFC'}
          title={'지하철'}
          onPress={() => navigation.navigate('지하철')}
        />
      </View>
      <View style={styles.ButtonLayer}>
        <TransportationButton
          buttonColor={'#FCFCFC'}
          title={'기차'}
          onPress={() => navigation.navigate('기차')}
        />
        <CustomButtons />
        <CustomButtons />
        <CustomButtons />
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
  Maintext: {
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

export default HomeScreen;
