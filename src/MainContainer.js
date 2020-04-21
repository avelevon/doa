import React, {useState, useEffect} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import Header from "./Header/Header";
import TodoInput from "./TodoInput/TodoInput";
import Todo from "./Todo/Todo";
import * as firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBmpNbUwPz5gH8TYDq7NkAcsxxeYKQYk8c",
    authDomain: "doa1-da795.firebaseapp.com",
    databaseURL: "https://doa1-da795.firebaseio.com",
    projectId: "doa1-da795",
    storageBucket: "doa1-da795.appspot.com",
    messagingSenderId: "1047379556436",
    appId: "1:1047379556436:web:dab3d219639487ac1a95c1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const MainContainer = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        db.collection("todo").onSnapshot(querySnapshot => {
            const arr =[]
            querySnapshot.forEach(item => arr.push({
                ...item.data(),
                id: item.id
            }))
            setData(arr)
        })
        console.ignoredYellowBox = [
            'Setting a timer'
        ];
    }, [])

    const addTodo = name => {
        db.collection("todo").add({
            name: name,
            finished: false
        })
            .then(docRef => {
                console.log("Document written with ID: ", docRef.id);
            })
            .catch(error => {
                console.error("Error adding document: ", error);
            });

    }

    const deleteTodo = todoId => {
        setData(prevState => prevState.filter(todo => todo.id !== todoId))
    }

    const finishTodo = todoId => {
        setData(prevState => prevState.map(todo => {
            if (todo.id === todoId) {
                return {
                    ...todo,
                    finished: !todo.finished
                }
            } else {
                return todo
            }
        }))
    }

    console.log(data)
    return (
        <View style={styles.wrapper}>
            <Header/>
            <View style={styles.layout}>
                <FlatList
                    style={styles.list}
                    data={data}
                    renderItem={({ item }) => (
                        <Todo
                            deleteTodo={deleteTodo}
                            finishTodo={finishTodo}
                            todo={item}
                        />
                    )}
                    keyExtractor={item => item.id}
                />
                <TodoInput addTodo={addTodo}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    layout: {
        width: '100%',
        padding: 20,
        flex: 1
    },
    list: {
        marginTop: 40
    }
})

export default MainContainer;