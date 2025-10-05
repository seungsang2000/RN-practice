import { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, Modal, Image } from "react-native";



function GoalInput(props) {
    const [enteredGoal, setEnteredGoal] = useState('');

    function goalInputHandler(enteredText) {
        setEnteredGoal(enteredText);
    }

    function addGoalHandler() {
        props.addGoalHandler(enteredGoal);
        setEnteredGoal('');
    }



    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={require('../assets/images/goal.png')} />
                <TextInput
                    style={styles.textInput}
                    placeholder="Your course goal!"
                    onChangeText={goalInputHandler}
                    value={enteredGoal}
                />
                <View style={styles.buttonContainer}>

                    <View style={styles.button}>
                        <Button title="Cancel" color="#f31282" onPress={props.onCancel} />
                    </View>

                    <View style={styles.button}>
                        <Button title="Add Goal" onPress={addGoalHandler} color="#b180f0" />
                    </View>
                </View>
            </View>
        </Modal>
    );

}


const styles = StyleSheet.create({

    inputContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#311b6b',
    },
    image: {
        width: 100,
        height: 100,
        marginBottom: 16,
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        color: '#120438',
        borderRadius: 6,
        width: '100%',
        marginRight: 8,
        padding: 16,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 16,
    },
    button: {
        width: '30%',
        marginHorizontal: 8,
    },

});


export default GoalInput;
