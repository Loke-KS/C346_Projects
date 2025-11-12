import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    Parent: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: "center",
        backgroundColor: 'whitesmoke',
        marginTop: 30
    },
    Child: {
        width: 80,
        height: 80,
        textAlign: "center",
        verticalAlign: 'middle'
    }
})

const Exercise4 = () => {
    return (
        <View style={[styles.Parent, {marginTop: 40}]}>
            <Text style={[styles.Child, {backgroundColor: 'skyblue'}]}>Square 1</Text>
            <Text style={[styles.Child, {backgroundColor: 'mediumaquamarine'}]}>Square 2</Text>
            <Text style={[styles.Child, {backgroundColor: 'crimson'}]}>Square 3</Text>
        </View>
    )
}

export default Exercise4;