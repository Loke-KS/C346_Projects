import React, {useState} from 'react';
import {ScrollView, View, Text, Alert, TouchableOpacity, Image} from 'react-native';
import {Picker} from '@react-native-picker/picker';

const DropdownBox = ({setQ, name1, name2, name3, name4}) => {
    return (
        <View>
            <Picker onValueChange={(value) => setQ(value)}>
                <Picker.Item label={name1} value={name1}/>
                <Picker.Item label={name2} value={name2}/>
                <Picker.Item label={name3} value={name3}/>
                <Picker.Item label={name4} value={name4}/>
            </Picker>
        </View>
    );
};

const QuizQuestion = ({source, question, setQ, name1, name2, name3, name4}) => {
    return (
        <View style={{marginTop: 10, marginBottom: 10}}>
            <Image
                source={{uri:source}}
                style={{width:412, height:400}}
            />
            <Text>{question}</Text>
            <DropdownBox setQ={setQ} name1={name1} name2={name2} name3={name3} name4={name4}/>
        </View>
    );
};

const QuizApp = () => {
    const [Q1, setQ1] = useState('');
    const [Q2, setQ2] = useState('');
    const [Q3, setQ3] = useState('');
    const [Q4, setQ4] = useState('');

    return (
        <ScrollView style={{marginTop: 40, marginBottom: 50}}>
            <Text style={{marginLeft:100, fontWeight: "bold", fontSize: 30}}>Pokemon Quiz</Text>

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
                question="What is this pokemon's name?"
                setQ={setQ2}
                name1="Fennekin"
                name2="Charmander"
                name3="Cyndaquil"
                name4="Torchic"
            />
            <QuizQuestion
                source="https://images.wikidexcdn.net/mwuploads/wikidex/f/ff/latest/20170823183914/Rowlet.png"
                question="What is this pokemon's name?"
                setQ={setQ3}
                name1="Chikorita"
                name2="Rowlet"
                name3="Owlet"
                name4="Virizion"
            />
            <QuizQuestion
                source="https://staticg.sportskeeda.com/editor/2021/05/a0c2c-16221900581898-800.jpg"
                question="What is this pokemon's name?"
                setQ={setQ4}
                name1="Mewtwo"
                name2="Umbreon"
                name3="Eevee"
                name4="Espeon"
            />

            <TouchableOpacity
                style={{
                    margin: 5, backgroundColor: "deepskyblue", height: 50, borderRadius: 5,
                    justifyContent: "center", alignItems: "center"
                }}
                onPress={() => {
                    let message;
                    let correctCount = 0;
                    // Add codes below to tabulate scores, display result and appropriate messages
                    if (Q1 === "Plusle") {
                        correctCount += 1;
                    }
                    if (Q2 === "Fennekin") {
                        correctCount += 1;
                    }
                    if (Q3 === "Rowlet") {
                        correctCount += 1;
                    }
                    if (Q4 === "Espeon") {
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
                <Text style={{fontSize: 20}}>SUBMIT ANSWERS</Text>
            </TouchableOpacity>

        </ScrollView>
    );
};

export default QuizApp;