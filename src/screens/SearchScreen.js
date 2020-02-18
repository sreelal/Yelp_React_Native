import React, {useState, useEffect} from 'react'
import {View, Text, StyleSheet, ScrollView} from 'react-native'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'
import ResultsList from '../components/ResultsList'

const SearchScreen = () => {
    const [term, setTerm] = useState('')
    const [searchApi, results, errorMessage] =  useResults();

    const filterResultsByPrice = (price) => {
        //price === '$' ||| '$$' ||| '$$$'
        return results.filter((result) => {
            return result.price === price
        })
    }

    return (
        /* Adding flex here to fill only the visible space that is available, otherwise the view expands above the boundaries in small devices and also scorollview will not work.Adding flex will keep the view inside the scrollview*/
        /*<View style = {{flex: 1}}> 
        /* Or another way is to use <> </>
        */ 
        <>
            <SearchBar 
                term = {term} 
                onTermChange = {(newTerm) => {
                    setTerm(newTerm)
                }}
                onTermSubmit = {() => {
                    searchApi(term)
                }}
            />
            {errorMessage? <Text>{errorMessage}</Text> : null}
            <ScrollView>
                <ResultsList results = {filterResultsByPrice('$')} title = "Cost Effective"/>
                <ResultsList results = {filterResultsByPrice('$$')}  title = "Bit Pricier"/>
                <ResultsList results = {filterResultsByPrice('$$$')}  title = "Big Spender"/>
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({

})

export default SearchScreen