import React, {useEffect, useState} from 'react';
import {
    ActivityIndicator,
    FlatList,
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View
} from 'react-native';
// import SchoolBusDestinationButton from "../../../Components/Buttons/SchoolBusDestinationButton";
import SchoolBusDestinationButton from "./Buttons/SchoolBusDestinationButton";

export default function SchoolBusFlatList({url}) {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(
            url,
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
        justifyContent: 'center',
        borderRadius: 15,
        backgroundColor: '#FFFFFF',
        width: '99%',
        height: '17%',
        margin: 5,
    },
});
