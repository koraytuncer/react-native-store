import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

const SearchBar = ({setSearchText}) => {

    const handleChange = (e) => {
        setSearchText(e)
    }
    return (
        <View>
            <TextInput
                placeholder="Ara..."
                placeholderTextColor={'#BBBBBB'}
                style={styles.textInput}
                onChangeText={handleChange}

            ></TextInput>
        </View>
    )
};

export default SearchBar;

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: '#eceff1',
    padding: 10,
    margin: 5,
    borderRadius: 10,
    color: '#000',
  },
});