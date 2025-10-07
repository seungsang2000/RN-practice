
import { StyleSheet, View, Alert, Text, FlatList, useWindowDimensions } from "react-native";
import Title from "../components/ui/Title";
import { useState, useEffect } from "react";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import { Ionicons } from '@expo/vector-icons';
import GuessLogItem from "../components/game/GuessLogItem";


function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen(props) {
    const initialGuess = generateRandomBetween(1, 100, props.userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [guessRounds, setGuessRounds] = useState([initialGuess]);
    const { width, height } = useWindowDimensions();



    useEffect(() => {
        if (currentGuess === props.userNumber) {
            props.onGameOver(guessRounds.length);
        }
    }, [currentGuess, props.userNumber, props.onGameOver]);


    useEffect(() => {
        minBoundary = 1;
        maxBoundary = 100;
    }, []);


    function nextGuessHandler(direction) {

        if ((direction === 'lower' && currentGuess < props.userNumber) ||
            (direction === 'greater' && currentGuess > props.userNumber)) {
            Alert.alert("거짓말하지 마세요!", "이게 당신의 숫자가 아니잖아요!", [{ text: '미안', style: 'cancel' }]);
            return;
        }

        if (direction === 'lower') {
            maxBoundary = currentGuess;
        } else {
            minBoundary = currentGuess + 1;
        }
        console.log(minBoundary, maxBoundary);
        const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(newRndNumber);
        setGuessRounds(prev => [newRndNumber, ...prev]);
    }

    const guessRoundsListLength = guessRounds.length;

    let content = (<>
        <NumberContainer >{currentGuess}</NumberContainer>
        <Card>
            <InstructionText style={styles.instructionText}>
                Higher or Lower?
            </InstructionText>
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
                        <Ionicons name="remove" size={24} color="white" />
                    </PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
                        <Ionicons name="add" size={24} color="white" />
                    </PrimaryButton>
                </View>
            </View>
        </Card>
    </>);

    if (width > 500) {
        content = (
            <>
                <InstructionText style={styles.instructionText}>
                    Higher or Lower?
                </InstructionText>
                <View style={styles.buttonContainerWide}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
                            <Ionicons name="remove" size={24} color="white" />
                        </PrimaryButton>
                    </View>
                    <NumberContainer >{currentGuess}</NumberContainer >
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
                            <Ionicons name="add" size={24} color="white" />
                        </PrimaryButton>
                    </View>
                </View>

            </>)
    }

    return <View style={styles.screen}>
        <Title>
            Game Screen
        </Title>
        {content}
        <View style={styles.listContainer}>
            {/* {
                guessRounds.map(guessRound => <Text key={guessRound}>{guessRound}</Text>)
            } */}
            <FlatList data={guessRounds}
                renderItem={(itemData) => <GuessLogItem
                    roundNumber={guessRoundsListLength - itemData.index}
                    guess={itemData.item} />}
                keyExtractor={(item) => item} />
        </View>
    </View >
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
        alignItems: 'center',
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    buttonContainer: {
        flex: 1,
    },
    instructionText: {
        marginBottom: 12,
    },
    buttonContainerWide: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    listContainer: {
        flex: 1,
        padding: 16,
    }
});


export default GameScreen;