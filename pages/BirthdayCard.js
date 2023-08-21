import React from 'react'
import { Image, Dimensions, StyleSheet, View } from 'react-native'


const image = '../assets/bday.gif'
const { width } = Dimensions.get('screen')

const segmentsLength = 91;
const minAge = 18;
const segmentWidth = 2;
const segmentSpacing = 20;
const snapSegment = segmentWidth + segmentSpacing;
const rulerWidth = (segmentsLength - 1)

function BirthdayCard() {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/bday.gif')} style={styles.image}></Image>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    image: {
        width: 250,
        height: 300,
        resizeMode: 'cover'
    }
})

export default BirthdayCard