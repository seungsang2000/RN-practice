import Title from "../components/ui/Title";
import { Image, StyleSheet, Text, View } from "react-native";
import Colors from "./constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";


function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {
    return (
        <View style={styles.rootContainer}>
            <Title>Game Over!</Title>
            <View style={styles.imageContainer}>
                <Image source={require('../assets/images/success.png')} style={styles.image} />
            </View>
            <Text style={styles.summaryText}>
                <Text style={styles.highlight}>{roundsNumber}</Text> 라운드 만에 번호 <Text style={styles.highlight}>{userNumber}</Text>번을 맞추었습니다
            </Text>
            <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
        </View>
    );
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },

    imageContainer: {
        borderRadius: 150,
        width: 300,
        overflow: 'hidden',
        height: 300,
        borderWidth: 3,
        borderColor: Colors.primary800,
        margin: 36,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    summaryText: {
        fontFamily: 'open-sans',
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 24,
    },
    highlight: {
        fontFamily: 'open-sans-bold',
        color: Colors.primary500,
    }
});

export default GameOverScreen;