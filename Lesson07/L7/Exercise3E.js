import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    Parent: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#F5fcff",
        borderColor: "#0099AA",
        borderWidth: 5,
        // justifyContent: "flex-start",
        // justifyContent: "flex-end",
        // justifyContent: "space-around",
        justifyContent: "space-between"
    },
    Child: {
        borderWidth: 2,
        textAlign: "center",
        fontSize: 24
    }
})

const Exercise3E = () => {
    return (
        <View style={[styles.Parent, {marginTop: 40}]}>
            <Text style={[styles.Child, {backgroundColor: "powderblue"}]}>Child One</Text>
            <Text style={[styles.Child, {backgroundColor: "skyblue"}]}>Child Two</Text>
            <Text style={[styles.Child, {backgroundColor: "steelblue"}]}>Child Three</Text>
        </View>
    )
}

export default Exercise3E;