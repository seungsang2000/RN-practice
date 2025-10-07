import { Text, View, StyleSheet, FlatList } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import { useRoute } from "@react-navigation/native";
import MealItem from "../components/MealItem";
import { useEffect } from "react";
import { useLayoutEffect } from "react";

function MealsOverviewScreen({ navigation, route }) {
    const categoryID = route.params.categoryID;
    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(categoryID) >= 0;
    });

    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((category) => category.id === categoryID).title;

        navigation.setOptions({
            title: categoryTitle,
        });
    }, [categoryID, navigation]);


    function renderMealItem(itemData) {
        const item = {
            id: itemData.item.id,
            title: itemData.item.title,
            imageUrl: itemData.item.imageUrl,
            duration: itemData.item.duration,
            complexity: itemData.item.complexity,
            affordability: itemData.item.affordability
        };
        return <MealItem {...item} />;
    }

    return (
        <View style={styles.container}>
            <FlatList data={displayedMeals} keyExtractor={(item) => item.id} renderItem={renderMealItem} style={styles.flatList} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    flatList: {
        width: "100%",
    },
});

export default MealsOverviewScreen;
