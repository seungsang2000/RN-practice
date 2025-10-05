import { useState } from 'react';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

import {
  StyleSheet,
  View,
  FlatList,
  Button
}
  from 'react-native';

import { StatusBar } from 'expo-status-bar';

export default function App() {

  const [courseGoals, setCourseGoals] = useState([]);
  const [moadalIsVisible, setModalIsVisible] = useState(false);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endAddGoalHandler() {
    setModalIsVisible(false);
  }


  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [...currentCourseGoals, { text: enteredGoalText, id: Math.random().toString() }]);
    endAddGoalHandler();
  }

  function deleteGoalHandler(id) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }



  return (
    <>
      <StatusBar style='light' />
      <View style={styles.appContainer}>

        <Button title="목표 추가" color="#bda4dfff" onPress={startAddGoalHandler} />

        {<GoalInput
          addGoalHandler={addGoalHandler}
          visible={moadalIsVisible}
          onCancel={endAddGoalHandler}
        />}


        <View style={styles.goalsContainer}>
          <FlatList data={courseGoals} renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                id={itemData.item.id}
                onDeleteItem={deleteGoalHandler} />
            );
          }}

            keyExtractor={(item) => { return item.id }}
            alwaysBounceVertical={false} />
        </View>
      </View >
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
  },

  goalsContainer: {
    flex: 5,
  },

});
