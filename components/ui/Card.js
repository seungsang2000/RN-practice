import { Dimensions, StyleSheet, View } from "react-native";
import Colors from "../../screens/constants/colors";



function Card(props) {
    return <View style={styles.inputContainer}>
        {props.children}
    </View>
}

const devicesWidth = Dimensions.get('window').width;


const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        marginTop: devicesWidth < 380 ? 18 : 36,
        backgroundColor: Colors.primary500,
        marginHorizontal: 24,
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
    },
});

export default Card;