import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

export default function TrainTimeTableScreen() {
  class Time extends Component {
    constructor(props) {
      super(props);
      this.state = {
        date: '',
      };
    }

    componentDidMount() {
      const week = new Array('일', '월', '화', '수', '목', '금', '토');

      const that = this;
      const date = new Date().getDate(); //Current Date
      const month = new Date().getMonth() + 1;
      const year = new Date().getFullYear();
      const hours = new Date().getHours();
      const min = new Date().getMinutes();
      const daynumber = new Date().getDay();
      const daylabel = week[daynumber];
      that.setState({
        date:
          year +
          '년 ' +
          month +
          '월 ' +
          date +
          '일 ' +
          '(' +
          daylabel +
          ') ' +
          hours +
          ':' +
          min,
      });
    }
    render() {
      return <Text style={{fontSize: 15}}>{this.state.date}</Text>;
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.DestInfoLayout}>
        <Text style={styles.DestInfo}>평택 - 서울</Text>{/* 도착역 Props로 전달*/}
      </View>
      <View style={styles.ListLayout}>
        <View style={styles.card}>
          <View style={styles.timeLayout}>
            <Time />
          </View>
          <View style={styles.AttributeLayout}>
            <Text style={{fontSize: 15, fontWeight: '500'}}>열차</Text>
            <Text style={{fontSize: 15, fontWeight: '500'}}>출발</Text>
            <Text style={{fontSize: 15, fontWeight: '500'}}>도착</Text>
            <Text style={{fontSize: 15, fontWeight: '500'}}>노선명</Text>
          </View>
          <View style={styles.TimeTableLayout}>
            <Text>기차 시간표 레이아웃</Text>{/* 기차 시간표 띄워주기*/}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCFCFC',
  },
  DestInfoLayout: {
    backgroundColor: '#2195FF',
    width: '100%',
    height: '6%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  DestInfo: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },
  ListLayout: {
    flex: 1,
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderColor: '#AAAAAA',
    borderRadius: 10,
    borderWidth: 0.5,
    width: '85%',
    height: '90%',
    top: '5%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  timeLayout: {
    flex: 1,
    width: '100%',
    borderBottomWidth: 0.5,
    borderColor: '#AAA',
    justifyContent: 'center',
    alignItems: 'center',
  },
  AttributeLayout: {
    flex: 1,
    width: '100%',
    borderBottomWidth: 0.5,
    borderColor: '#AAA',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  TimeTableLayout: {
    flex: 11,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
