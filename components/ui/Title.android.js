import { StyleSheet, Text, Platform } from "react-native";

function Title({ children }) {
    return (
        <Text style={styles.title}>{children}</Text>
    );
}

const styles = StyleSheet.create({
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 24,
        // fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 24,
        color: 'white',
        //borderWidth: Platform.OS === 'android' ? 2 : 0,
        borderWidth: Platform.select({ ios: 0, android: 2 }),
        borderColor: 'white',
        padding: 12,
        maxWidth: '80%',
        width: 300
    },
});

export default Title;