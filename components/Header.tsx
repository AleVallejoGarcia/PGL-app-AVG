import { View, Text, StyleSheet } from 'react-native'
import { colors } from '../assets/color/Color';

import React from 'react'

export default function Header() {
  return (
    <View style={styles.headerContainer}>
        <View style={styles.tittleContainer}>
            <Text style={styles.headerText}>AVG-APP</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headerContainer: {
        position: 'absolute',
        top: 0,
        width: '100%',
        height: 100,
        backgroundColor: colors.Black,
    },
    tittleContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginVertical: 15,
    },
    headerText: {
        color: colors.Dun,
        textAlign: 'center',
        fontSize: 30,
        fontWeight: "bold",
        textAlignVertical: "center",
    }
});