import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    Parent: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#F5fcff",
        borderColor: "#0099AA",
        borderWidth: 5
    },
    Child: {
        flex: 1,
        borderWidth: 2,
        textAlign: "center",
        fontSize: 24
    }
})

const Exercise3C = () => {
    return (
        <View style={[styles.Parent, {marginTop: 40}]}>
            <Text style={[styles.Child, {backgroundColor: "powderblue", maxWidth: 90}]}>Child One</Text>
            <Text style={[styles.Child, {backgroundColor: "skyblue"}]}>Child Two</Text>
            <Text style={[styles.Child, {backgroundColor: "steelblue", maxHeight: 120}]}>Child Three</Text>
        </View>
    )
}

export default Exercise3C;