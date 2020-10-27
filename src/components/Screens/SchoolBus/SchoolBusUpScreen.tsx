import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Alert,
} from 'react-native';

function SchoolDownBus() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      'https://ptubus.com/server/schoolbus/?startStationID=0&endStationID=1&upDownTypeCode=U',
    )
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={{flex: 1, padding: 24}}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={data}
            keyExtractor={({id}, index) => id}
            renderItem={({item}) => (
              <View style={styles.itemView}>
                <TouchableOpacity
                  onPress={() => {
                    alert(item.startStationName);
                  }}>
                  <View style={styles.StationInfo}>
                    <Text style={styles.leftItem}>
                      {item.startStationName}{' '}
                    </Text>
                    <Text style={styles.rightItem}>{item.endStationName}</Text>
                  </View>
                  <View style={styles.TimeInfo}>
                    <Text style={styles.leftItem}>{item.schedule} </Text>
                  </View>
                </TouchableOpacity>
              </View>
            )}
          />
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  itemView: {
    // // flexDirection: '',
    // borderRadius: 15,
    // borderWidth: 0.5,
    // backgroundColor: '#FFFFFF',
    // width: '100%',
    // height: '53',
    // marginBottom: 10,
    // // border: 0.5,
    borderRadius: 25,
    backgroundColor: '#C4C4C4',
    width: 375,
    height: 96,
    marginBottom: 10,
  },
  StationInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  TimeInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftItem: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingLeft: 29,
    paddingTop: 10,
  },
  rightItem: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingLeft: 200,
    paddingRight: 21,
    paddingTop: 10,
  },
});
export default SchoolDownBus;
