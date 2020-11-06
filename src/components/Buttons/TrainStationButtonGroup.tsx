import React, {Component, useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View, Alert,
} from 'react-native';
import TrainStationButton from './TrainStationButton';

export default function TrainStationButtonGroup() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://ptubus.com/server/train/station/')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={{flex: 1, padding: 10}}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            style={styles.buttonList}
            data={data}
            keyExtractor={({id}, index) => id}
            renderItem={({item}) => (
              <View style={styles.itemView}>
                <TrainStationButton endStationName={item.endStationName} />
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
    flex: 1,
    borderColor: '#AAA',
    borderWidth: 0.5,
    borderRadius: 15,
    backgroundColor: '#FFFFFF',
    height: '17%',
    margin: 5,
  },
  buttonList: {
    width: '25%',
  },
});
