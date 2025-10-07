import { View, Text, StyleSheet } from 'react-native';

function Subtitle({ children }) {
    return (<View style={styles.subTitleContainer}>
        <Text style={styles.subTitle}>{children}</Text>
    </View>)
}


const styles = StyleSheet.create({
    subTitle: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#e2b497',
        textAlign: 'center',

    },
    subTitleContainer: {
        marginHorizontal: 24,
        marginVertical: 4,
        borderBottomColor: 'white',
        borderBottomWidth: 2,
        borderBottomColor: '#e2b497',
    },
});

export default Subtitle;