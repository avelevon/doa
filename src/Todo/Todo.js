import React from 'react';
import {Button, TouchableHighlight, StyleSheet, Text, View} from 'react-native';

const Todo = props => {

    const {todo, deleteTodo, finishTodo} = props;

    return (
        <View style={styles.todo}>
            <TouchableHighlight
                onPress={() => finishTodo(todo.id)}
                onLongPress={() => deleteTodo(todo.id)}
                activeOpacity={0.6}
                underlayColor="#DDDDDD"
            >
                <Text style={todo.finished ? styles.textFinished : styles.text}>{todo.name}</Text>
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    todo: {
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 4,
        width: '100%',
        marginBottom: 10
    },
    text: {
        padding: 4
    },
    textFinished: {
        textDecorationLine: 'line-through',
        padding: 4
    }
})
export default Todo;