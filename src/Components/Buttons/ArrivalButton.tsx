import React, {useState} from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Text,
} from 'react-native';
import SelectDestinationModal from "../Modals/SelectDestinationModal";

export default function ArrivalButton(props){
    const defaultProps = {
        subtitle: '도착',
        titleColor: '#0012AF',
        onPress: () => null,
    };
    const [showModal, setShowModal] = useState(false);
    const onClose = () => setShowModal(false);

    return (
        <TouchableOpacity
            style={styles.button}
            onPress={() => {
                setShowModal(true);
            }}>
            <Text style={styles.subtitle}>{defaultProps.subtitle}</Text>
            <Text style={[styles.title, {color: defaultProps.titleColor}]}>
                {props.title}
            </Text>
            <SelectDestinationModal show={showModal} onClose={onClose}/>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        width: '50%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        backgroundColor: '#FFF',
    },
    title: {
        fontSize: 30,
        fontWeight: '500',
    },
    subtitle: {
        top: '-25%',
        color: '#8B8B8B',
    },
    input: {
        backgroundColor: '#E9E9E9',
        height: '80%',
        padding: '5%',
        top: '-15%',
        borderRadius: 10,
        fontSize: 17,
    },
    TextInputLayer: {
        flex: 1,
        justifyContent: 'center',
        borderBottomWidth: 0.5,
        borderColor: '#AAA',
    },
    DataLayer: {
        flex: 5,
        flexDirection: 'row',
    },
    DataButtonLayer: {
        flex: 5,
    },
    DataSearchLayer: {
        borderColor: '#AAA',
        borderLeftWidth: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
});
