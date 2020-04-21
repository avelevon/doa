import React from 'react';
import { Button, Alert, StyleSheet, Text, View } from 'react-native';

const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.text}>Todo</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 50,
        width: '100%',
        backgroundColor: 'blue',
        position: 'absolute',
        top: 0,
    },
    text: {
        textAlign: 'center',
        marginTop: 30
    }
})
export default Header;