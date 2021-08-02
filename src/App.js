import React from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, SafeAreaView } from 'react-native';
import ProductCard from './components/ProductCard';

import store_data from './store_data.json';

function App() {

  const renderProduct = ({ item }) => <ProductCard product={item} />;

  const [value, onChangeText] = React.useState('Ara..');

  return (
    <View style={styles.container}>

      <Text style={{ fontSize: 38, fontWeight: 'bold', color: '#800080' }}>PATIKASTORE</Text>
      <TextInput
        style={{ height: 40, backgroundColor: '#eceff1', borderRadius: 10, padding: 0, }}
        onChangeText={text => onChangeText(text)}
        value={value}
      />
      <FlatList
        numColumns={2}
        keyExtractor={(item, index) => item.id.toString()}
        data={store_data}
        renderItem={renderProduct}

      />
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 40,
  }
})

export default App;