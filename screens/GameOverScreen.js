import Title from "../components/ui/Title";
import { Image, StyleSheet, Text, View, Dimensions, useWindowDimensions, ScrollView } from "react-native";
import Colors from "./constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";


function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {

    const { width, height } = useWindowDimensions();

    let imageSize = 300;

    if (width < 380) {
        imageSize = 150;
    }

    if (height < 400) {
        imageSize = 80;
    }

    const imageStyle = {
        width: imageSize,
        height: imageSize,
        borderRadius: imageSize / 2,
    };


    return (
        <ScrollView style={styles.screen}>
            <View style={styles.rootContainer}>
                <Title>Game Over!</Title>
                <View style={[styles.imageContainer, imageStyle]}>
                    <Image source={require('../assets/images/success.png')} style={styles.image} />
                </View>
                <Text style={styles.summaryText}>
                    <Text style={styles.highlight}>{roundsNumber}</Text> 라운드 만에 번호 <Text style={styles.highlight}>{userNumber}</Text>번을 맞추었습니다
                </Text>
                <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
            </View>
        </ScrollView>
    );
}

// const devicesWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },

    imageContainer: {
        // borderRadius: devicesWidth < 380 ? 75 : 150,
        // width: devicesWidth < 380 ? 150 : 300,
        // height: devicesWidth < 380 ? 150 : 300,
        overflow: 'hidden',

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