
import { useLayoutEffect } from "react";
import { Image, Text, View, StyleSheet, ScrollView, Button } from "react-native";

import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import List from "../components/Mealdetail/List";
import Subtitle from "../components/Mealdetail/Subtitle";
import IconButton from "../components/IconButton";

function MealDetailScreen({ route, navigation }) {
    const mealID = route.params.mealID;
    const selectedMeal = MEALS.find((meal) => meal.id === mealID);

    function headerButtonPressHandler() {
        console.log('pressed!');
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <IconButton icon="star" onPress={headerButtonPressHandler} color="white" />
            }
        });
    }, [navigation, headerButtonPressHandler]);


    return (
        <ScrollView style={styles.rootContainer}>
            <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <MealDetails
                duration={selectedMeal.duration}
                complexity={selectedMeal.complexity}
                affordability={selectedMeal.affordability}
                textStyle={styles.detail}
            />

            <View style={styles.listOuterContainer}>
                <View style={styles.listContainer}>
                    <Subtitle>재료</Subtitle>
                    <List data={selectedMeal.ingredients} />

                    <Subtitle>요리 순서</Subtitle>
                    <List data={selectedMeal.steps} />
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({

    rootContainer: {
        marginBottom: 32,
    },
    image: {
        width: '100%',
        height: 350,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: 'white',
    },
    detail: {
        color: 'white',
        fontSize: 12,
    },
    listOuterContainer: {
        alignItems: 'center',
    },
    listContainer: {
        maxWidth: '80%',
    }

});

export default MealDetailScreen;