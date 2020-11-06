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

export default function SchoolBusDownScreen() {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(
            'https://ptubus.com/server/schoolbus/?startStationID=1&endStationID=0&upDownTypeCode=D',
        )
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
                        data={data}
                        keyExtractor={({id}, index) => id}
                        renderItem={({item}) => (
                            <View style={styles.itemView}>
                                <TouchableOpacity
                                    onPress={() => {
                                        alert(item.startStationName);
                                    }}>
                                    <View style={styles.Info}>
                                        <Text style={styles.timeItem}>{item.schedule} </Text>
                                    </View>
                                    <View style={styles.Info}>
                                        <Text style={styles.stationNameItem}>
                                            {item.startStationName}{' '}
                                        </Text>
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
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderRadius: 15,
        backgroundColor: '#FFFFFF',
        width: '100%',
        height: '17%',
        margin: 5,
    },
    Info: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
    },
    stationNameItem: {
        fontSize: 10,
        paddingLeft: 29,
        paddingTop: 1,
        paddingBottom: 10,
        color: '#979797',
    },
    timeItem: {
        fontSize: 19,
        fontWeight: 'bold',
        paddingLeft: 29,
        paddingTop: 10,
    },
});
