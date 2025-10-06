import { StyleSheet, Text, View } from "react-native";

import Colors from "../../screens/constants/colors";
function NumberContainer(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>{props.children}</Text>
        </View>
    );
}

export default NumberContainer;


const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: Colors.accent500,
        padding: 24,
        margin: 24,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    numberText: {
        color: Colors.accent500,
        fontSize: 36,
        //fontWeight: 'bold',
        fontFamily: 'open-sans-bold',
        textAlign: 'center',
    }
});