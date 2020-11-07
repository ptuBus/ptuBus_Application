import React, {useEffect, useState} from 'react';
import {SchoolBusDestinationButton, SchoolDestinationButton} from '../../Buttons';
import {
    ActivityIndicator,
    FlatList,
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
} from 'react-native';

export default function SchoolBusUpScreen() {
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
            <ScrollView style={{flex: 1, padding: 10}}>
                {isLoading ? (
                    <ActivityIndicator />
                ) : (
                    <FlatList
                        data={data}
                        keyExtractor={({id}, index) => id}
                        renderItem={({item}) => (
                            <View style={styles.itemView}>
                                <SchoolBusDestinationButton
                                    schedule={item.schedule}
                                    startStationName={item.startStationName}
                                    endStationName={item.endStationName}
                                />
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
});
