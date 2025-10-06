import { View, Text, TextInput, StyleSheet, Alert } from 'react-native';
import PrimaryButton from '../components/ui/PrimaryButton';
import { useState } from 'react';
import Colors from './constants/colors';
import Title from '../components/ui/Title';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';


function StartGameScreen(props) {

    const [enteredNumber, setEnteredNumber] = useState('');

    function numberInputHandler(enteredText) {
        setEnteredNumber(enteredText);
    }

    function resetInputHandler() {
        setEnteredNumber('');
    }

    function confirmInputHandler() {
        const chosenNumber = parseInt(enteredNumber);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert("유효하지 않은 숫자", "1-99 사이의 숫자를 입력하세요.", [{ text: "확인", style: "destructive", onPress: resetInputHandler }]);
            return;
        }
        props.onPickNumber(chosenNumber);
    }

    return (
        <View style={styles.rootContainer}>
            <Title>Guess My Number</Title>
            <Card>
                <InstructionText>Enter a Number</InstructionText>
                <TextInput style={styles.numberInput} maxLength={2} keyboardType="number-pad"
                    value={enteredNumber}
                    onChangeText={numberInputHandler}
                />
                <View style={styles.buttonContainer}>
                    <View style={{ flex: 1 }}>
                        <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                    </View>
                    <View style={{ flex: 1 }}>
                        <PrimaryButton onPress={confirmInputHandler}>Start Game</PrimaryButton>
                    </View>
                </View>
            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        marginTop: 100,
        alignItems: 'center',
    },
    numberInput: {
        height: 60,
        width: 50,
        fontSize: 32,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500,
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 16,
    },
});


export default StartGameScreen;