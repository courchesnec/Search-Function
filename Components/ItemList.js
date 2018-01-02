import React from 'react';
import { ScrollView, View } from 'react-native';
import ItemListItem from './ItemListItem';

const ItemList = ({ items }) => {
  const itemsItems = items.map(item => (
    <ItemListItem
    key={item.ASIN}
    item={item}
    />
  ));

  return (
    <ScrollView>
      <View style={styles.containerStyle}>
        {itemsItems}
      </View>
    </ScrollView>
  );
};

const styles = {
  containerStyle: {
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10
  }
};

export default ItemList;
