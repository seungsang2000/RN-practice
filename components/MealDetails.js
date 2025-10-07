import { StyleSheet, Text, View } from "react-native";

function MealDetails({ duration, complexity, affordability, style, textStyle }) {
    return (
        <View style={[styles.details, style]}>
            <Text style={[styles.detailItem, textStyle]}>{duration}</Text>
            <Text style={[styles.detailItem, textStyle]}>{complexity.toUpperCase()}</Text>
            <Text style={[styles.detailItem, textStyle]}>{affordability.toUpperCase()}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    details: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 8,
    },
    detailItem: {
        flex: 1,
        textAlign: 'center',
        fontSize: 12,
    },
});


export default MealDetails;