import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import Products from './components/Products';
import SearchBar from './components/SearchBar';
import data from './data.json';

const App = () => {
  const [searchText, setSearchText] = useState('');

  const renderProduct = ({item}) => <Products products={item} />;
  const filteredProduct = data.filter(product =>
    `${product.title}`.toLowerCase().includes(searchText.toLowerCase()),
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>PatikaStore</Text>
      <SearchBar setSearchText={setSearchText} />
      <FlatList
        numColumns={2}
        keyExtractor={item => item.id.toString()}
        data={filteredProduct}
        renderItem={renderProduct}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    color: '#800080',
    fontSize: 30,
    fontWeight: 'bold',
    margin: 5,
  },
});
