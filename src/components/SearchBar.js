import React from 'react'
import {View, TextInput, StyleSheet} from 'react-native'
import { Feather } from '@expo/vector-icons'

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
    return (
        <View style = {styles.background}>
            <Feather name = "search" style = {styles.iconStyle}/>
            <TextInput placeholder = "Search" 
                style = {styles.inputStyle}
                onChangeText = {(newText) => {
                    onTermChange(newText)
                }}
                value = {term}
                autoCapitalize = "none"
                autoCorrect = {false}
                onEndEditing = {onTermSubmit}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: 'lightgray',
        margin: 15,
        borderRadius: 5,
        height: 50,
        flexDirection: 'row'
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
    }

})

export default SearchBar