import React, { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import GoalItems from './components/GoalItems';
// import GoalInput from './components/GoalInput';

export default function App() {
    const [enterGoalText, setEnterGoalText] = useState('');
    const [coursesGoalText, setCoursesGoalText] = useState([]);

    const goalInputHandler = (data) => {
        setEnterGoalText(data);
    };

    const addGoalHandler = () => {
        setCoursesGoalText((currentGoal) => [...currentGoal, enterGoalText]);
        setEnterGoalText('');
    };

    return (
        <View style={styles.appContainer}>
            {/* <GoalInput styles={styles} enterGoalText={enterGoalText} goalInputHandler={goalInputHandler} addGoalHandler={addGoalHandler}  /> */}
            <View style={styles.inputContainer}>
                <TextInput style={styles.textInput} placeholder="Enter new goal" value={enterGoalText} onChangeText={goalInputHandler} />
                <Button title="ADD GOAL" onPress={addGoalHandler} />
            </View>
            <Text> LIST OF GOALS</Text>

            <View style={styles.goalContainer}>
                <FlatList
                    data={coursesGoalText}
                    renderItem={(dtaItem) => {
                        return <GoalItems />;
                    }}
                    alwaysBounceVertical={false}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 16
    },
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
        borderBottomColor: '#cccccc',
        borderBottomWidth: 1
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '70%',
        marginRight: 8,
        padding: 8
    },
    goalContainer: {
        flex: 4
    }
});
