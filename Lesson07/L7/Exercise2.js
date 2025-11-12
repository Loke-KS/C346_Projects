import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    greenBox: {
        width: 100,
        height: 100,
        marginTop: 30,
        backgroundColor: "green",
        borderStyle: "solid"
    },
    boxText: {
        textAlign: 'center',
        color: "white"
    },
    title: {
        fontWeight: "bold"
    }
})

const Exercise2 = () => {
    return (
        <View style={{marginTop: 40, flex: 1}}>
            <Text style={[styles.greenBox, styles.boxText, styles.title]}>Who Are We</Text>
            <Text style={[styles.greenBox, styles.boxText]}>Our People</Text>
            <Text style={[styles.greenBox, styles.boxText]}>Our Campus</Text>
        </View>
    )
}

export default Exercise2;