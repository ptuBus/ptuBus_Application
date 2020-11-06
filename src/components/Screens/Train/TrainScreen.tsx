import React from 'react';
import {Alert, SafeAreaView, StyleSheet, View} from 'react-native';
import InquiryButton from '../../Buttons/InquiryButton';
import DestinationButton from '../../Buttons/DestinationButton';
import ArrivalButton from '../../Buttons/ArrivalButton';
import TimeSelectOption from '../../SelectOptions/TimeSelect/TimeSelectOption';
import WeekSelectGroup from '../../SelectOptions/WeekSelect/WeekSelectGroup';

export default function TrainScreen({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <View style={styles.sector1}>
          <ArrivalButton
            buttonColor={'#FFF'}
            subtitle={'출발'}
            title={'평택'}
            titleColor={'#000'}
          />
          <DestinationButton
            buttonColor={'#FFF'}
            subtitle={'도착'}
            title={'서울'}
            titleColor={'#0012AF'}
          />
        </View>
        <View style={styles.sector2}>
          <TimeSelectOption />
        </View>
        <View style={styles.sector3}>
          <WeekSelectGroup />
        </View>
        <View style={styles.sector4}>
          <InquiryButton
            buttonColor={'#2195FF'}
            title={'조회하기'}
            onPress={() => navigation.navigate('기차시간표')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#FCFCFC',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderColor: '#AAAAAA',
    borderRadius: 10,
    borderWidth: 0.5,
    width: '85%',
    height: '70%',
    top: '14%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  sector1: {
    backgroundColor: '#FFF',
    width: '100%',
    // height: '35%',
    flex: 3,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  sector2: {
    backgroundColor: '#FFF',
    width: '100%',
    // height: '24%',
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#AAAAAA',
    borderTopWidth: 0.5,
  },
  sector3: {
    width: '100%',
    // height: '24%',
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#AAAAAA',
    borderTopWidth: 0.5,
  },
  sector4: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    // height: '17%',
    flex: 1.3,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#AAAAAA',
    borderTopWidth: 0.5,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
});
