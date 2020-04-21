import React, {useState} from 'react';
import { Button, TextInput, StyleSheet, Text, View } from 'react-native';

const TodoInput = props => {

    const {addTodo} = props;

    const [value, setValue] = useState();

    const onChangeText = text => {
        setValue(text)
    }

    const onPressHandler = () => {
        if (value !== '') {
            addTodo(value)
            setValue('')
        }

    }

    return (
        <View style={styles.form}>
            <TextInput
                style={styles.input}
                onChangeText={text => onChangeText(text)}
                value={value}
            />
            <Button
                style={styles.button}
                onPress={onPressHandler}
                title="Добавить"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    form: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        position: 'absolute',
        bottom: 20,
        left: 20,
        backgroundColor: 'white',
        paddingTop: 10
    },
    input: {
        width: '70%',
        borderBottomWidth: 2,
        borderBottomColor: 'blue'
    },
    button: {

    }

})
export default TodoInput;