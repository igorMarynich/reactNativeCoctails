import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import List from './components/List'
import Filter from './components/Filter'
import StateFetchContext from './context/StateFetchContext'

const Stack = createStackNavigator()

const App = () => {
  return (
    <StateFetchContext>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="List" component={List} />
          <Stack.Screen name="Filter" component={Filter} />
        </Stack.Navigator>
      </NavigationContainer>
    </StateFetchContext>
  );
};

export default App;
