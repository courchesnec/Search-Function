import React from 'react';
import { View, Text, Image } from 'react-native';

const ItemListItem = ({ item }) => {
  return (
    <View>
      <Image
        style={styles.imageStyle}
        source={{ uri: item.ItemLinks.ItemLink.url }}
      />
      <Text>{item.ItemAttributes.Title}</Text>
      <Text>{item.ItemAttributes.Manufacturer}</Text>
      <Text>{item.ItemAttributes.ProductGroup}</Text>
    </View>
  );
};

const styles = {
  imageStyle: {
    alignSelf: 'stretch',
    height: 180
  }
};

export default ItemListItem;
