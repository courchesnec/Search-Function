import React, { Component } from 'react';
import { View } from 'react-native';
import ItemSearch from 'amazon-product-api';
import SearchBar from './Components/SearchBar';
import AppHeader from './Components/AppHeader';
import ItemList from './Components/ItemList';

const AMZ_API_KEY = 'AKIAJTJQAZ6XUQFB6NSQ';
const AMZ_ASS_TAG = 'xxxxxxxxxxxxxxxxxxx';


export default class App extends Component {
  state ={
    loading: false,
    items: []
  }

  onPressSearch = keyword => {
    this.searchAmazonWalmart(keyword);
  }

  searchAmazonWalmart = keyword => {
    this.setState({ loading: true });
    ItemSearch({ key: AMZ_API_KEY, AMZ_ASS_TAG, keyword }, items => {
      this.setState({
        loading: false,
        items
      });
    });
  }

  render() {
    const { loading, items } = this.state;
    return (
      <View style={{ flex: 1, backgroundColor: '#ddd' }}>
      <AppHeader headerText="Shed" />
      <SearchBar
        loading={loading}
        onPressSearch={this.onPressSearch}
      />
        <ItemList items={items} />
      </View>
    );
  }
}
