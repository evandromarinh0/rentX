import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../screens/Home';
import { CarDetails } from '../screens/CarDetails';
import { Scheduling } from '../screens/Scheduling';
import { SchedulingDetails } from '../screens/SchedulingDetails';
import { SchedulingSuccess } from '../screens/SchedulingSuccess';

const StackRoutes = createStackNavigator();

export function Routes() {
  return(
    <StackRoutes.Navigator headerMode='none'>
      <StackRoutes.Screen name='Home' component={Home} />
      <StackRoutes.Screen name='CarDetails' component={CarDetails} />
      <StackRoutes.Screen name='Scheduling' component={Scheduling} />
      <StackRoutes.Screen name='SchedulingDetails' component={SchedulingDetails} />
      <StackRoutes.Screen name='SchedulingSuccess' component={SchedulingSuccess} />
    </StackRoutes.Navigator>
  );
}