import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'

const MenuItem = ({text, onPress, image}) => {
  return (
    <TouchableOpacity
    style = {styles.buttonContainer}
    onPress={onPress}
    >
        <Image
        source = {{ uri: image}}
        style = {styles.image}
        />
        <Text style = {styles.text}>{ text }</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    buttonContainer: {
        alignItems: 'center',
        backgroundColor: '#344652',
        borderRadius: 5,
        marginBottom: 15,
        marginTop: 15,
        padding: 15,
        flexDirection: 'row',
    },
    image: {
        height: 30,
        width: 30,
    },
    text: {
        marginStart: 20,
        fontWeight: 'bold',
        color: 'white',
        }
})

export default MenuItem