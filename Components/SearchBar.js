import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import { Button } from 'react-native-elements';

class SearchBar extends Component {
  state = { keyword: '' };
  render() {
    const { containerStyle, searchTextStyle, buttonStyle } = styles;

    return (
      <View style={containerStyle}>
        <TextInput
          style={searchTextStyle}
          onChangeText={keyword => this.setState({ keyword })}
          value={this.state.keyword}
        />
        <Button
          buttonStyle={buttonStyle}
          title={this.props.loading ? 'Loading' : 'Search Amazon'}
          onPress={() => this.props.onPressSearch(this.state.keyword)}
        />
      </View>
    );
      }
}

const styles = {
  containerStyle: {
    flexDirection: 'row',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 6
  },
  searchTextStyle: {
    flex: 1,
    borderBottomWidth: 1
  },
  buttonStyle: {
    height: 30,
    marginBottom: 8
  }
};

export default SearchBar;
