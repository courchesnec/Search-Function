import React from 'react';
import { Header } from 'react-native-elements';

const AppHeader = (props) => (
  <Header
    centerComponent={{ text: props.headerText, style: { color: 'white' } }}
    outerContainerStyles={{ backgroundColor: '#40E0D0' }}
  />
  );

export default AppHeader;
