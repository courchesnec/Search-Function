import React, { Component } from 'react';
import { View } from 'react-native';
import ItemSearch from 'amazon-product-api';
import { withAuthenticator } from 'aws-amplify-react-native';
import { awsmobile } from './aws-exports';
import SearchBar from './Components/SearchBar';
import AppHeader from './Components/AppHeader';
import ItemList from './Components/ItemList';

const AMZ_API_KEY = 'AKIAJTJQAZ6XUQFB6NSQ';
const AMZ_ASS_TAG = 'xxxxxxxxxxxxxxxxxxx';
const WAL_API_KEY = 'xxxxxxxxxxxxxxxxxxx';


export default class App extends Component {
  state ={
    loading: false,
    items: []
  }
  fetch('http://webservices.amazon.com/onca/xml?', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    Service=AWSECommerceService&,
    AWSAccessKeyId=AMZ_API_KEY&,
    AssociateTag=AMZ_ASS_TAG&,  
    Operation=ItemSearch&,
    Brand=&,
    Availability=Available&,
    SearchIndex=&,
    Keywords=keyword
  }),
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
