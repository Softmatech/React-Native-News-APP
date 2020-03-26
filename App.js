import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import News from './Screen/News';

const StackNavigator = createStackNavigator({
	News: News
});

const App = createAppContainer(StackNavigator);

export default App;
