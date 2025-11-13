import React, {useState} from 'react';
import {ScrollView, View, Text, Alert, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const styles = StyleSheet.create({
    Parent: {
        marginTop: 40,
        marginBottom: 50,
        backgroundColor: 'steelblue',
    },
    Child: {
        margin: 10,
        borderWidth: 2,
        borderRadius: 10,
        backgroundColor: "lightblue"
    },
    borderBox: {
        borderWidth: 2,
        borderRadius: 10,
        margin: 10,
        backgroundColor: "white"
    },
    imageSize: {
        width: 370,
        height: 370
    },
    title: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 30
    },
    question: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 18
    },
    submit: {
        fontWeight: "bold",
        fontSize: 20,
    },
    submitButton: {
        margin: 10,
        height: 50,
        borderWidth: 2,
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "deepskyblue",
    }
})

const DropdownBox = ({style, setQ, name1, name2, name3, name4}) => {
    const pickerItems = [name1, name2, name3, name4].filter(Boolean);
    return (
        <View style={style}>
            <Picker onValueChange={(value) => setQ(value)}>
                {pickerItems.map((item, index) => (
                    <Picker.Item key={index} label={item} value={item} />
                ))}
            </Picker>
        </View>
    );
};

const QuizQuestion = ({source, question, setQ, name1, name2, name3, name4}) => {
    return (
        <View style={[styles.Child]}>
            <Image
                source={{uri:source}}
                style={[styles.borderBox, styles.imageSize]}
            />
            <Text style={[styles.question]}>{question}</Text>
            <DropdownBox
                style={styles.borderBox}
                setQ={setQ} name1={name1} name2={name2} name3={name3} name4={name4}
            />
        </View>
    );
};

const QuizApp = () => {
    const [Q1, setQ1] = useState("");
    const [Q2, setQ2] = useState("");
    const [Q3, setQ3] = useState("");
    const [Q4, setQ4] = useState("");

    return (
        <ScrollView style={[styles.Parent]}>
            <Text style={[styles.title]}>
                <MaterialIcons name="catching-pokemon" size={24} color="black"/>
                Pokemon Quiz
            </Text>

            <QuizQuestion
                source="https://tse1.mm.bing.net/th/id/OIP.A9FFVffKI3YFZpBFPBRcogHaG1?rs=1&pid=ImgDetMain&o=7&rm=3"
                question="What is this pokemon's name?"
                setQ={setQ1}
                name1="Pikachu"
                name2="Plusle"
                name3="Voltorb"
                name4="Electrode"
            />
            <QuizQuestion
                source="https://tse4.mm.bing.net/th/id/OIP.FYLEVjosvKcyg58YUj34BgHaIX?rs=1&pid=ImgDetMain&o=7&rm=3"
                question="What is this pokemon's type?"
                setQ={setQ2}
                name1="Fighting"
                name2="Normal"
                name3="Fire"
                name4="Ground"
            />
            <QuizQuestion
                source="https://assets.pokemon.com/assets/cms2/img/pokedex/full/722.png"
                question="What is this pokemon's name?"
                setQ={setQ3}
                name1="Chikorita"
                name2="Rowlet"
                name3="Owlet"
                name4="Virizion"
            />
            <QuizQuestion
                source="https://staticg.sportskeeda.com/editor/2021/05/a0c2c-16221900581898-800.jpg"
                question="Is this pokemon in its base form or evolved form?"
                setQ={setQ4}
                name1="Base"
                name2="Evolved"
            />

            <TouchableOpacity
                style={[styles.submitButton]}
                onPress={() => {
                    let message;
                    let correctCount = 0;
                    // Add codes below to tabulate scores, display result and appropriate messages
                    if (Q1 === "Plusle") {
                        correctCount += 1;
                    }
                    if (Q2 === "Fire") {
                        correctCount += 1;
                    }
                    if (Q3 === "Rowlet") {
                        correctCount += 1;
                    }
                    if (Q4 === "Evolved") {
                        correctCount += 1;
                    }
                    if (correctCount === 4) {
                        message = "You got it all right!"
                    }
                    else {
                        message = "Better luck next time!"
                    }
                    Alert.alert("You got " + correctCount + " correct. " + message);
                }}
            >
                <Text style={[styles.submit]}>SUBMIT ANSWERS</Text>
            </TouchableOpacity>

        </ScrollView>
    );
};

export default QuizApp;
