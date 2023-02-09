import { StyleSheet } from 'react-native/types';

export default function GoalItems() {
    return (
        <View style={styles.goalItems}>
            <Text style={styles.goalText}>{dtaItem.item}.....</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    goalItems: {
        margin: 8,
        padding: 8,
        borderRadius: 1,
        backgroundColor: '#5e0acc'
    },
    goalText: {
        color: 'white',
        fontWeight: 'bold'
    }
});
