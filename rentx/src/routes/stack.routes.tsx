import React from 'react'

import {
  CarDetails,
  Home,
  Scheduling,
  SchedulingComplete,
  SchedulingDetails
} from 'src/screens'

import { createStackNavigator } from '@react-navigation/stack'

const { Navigator: StackNavigator, Screen } = createStackNavigator()

const StackRoutes = () => {
  return (
    <StackNavigator screenOptions={{ headerShown: false }}>
      <Screen name='Home' component={Home} />
      <Screen name='SchedulingDetails' component={SchedulingDetails} />
      <Screen name='SchedulingComplete' component={SchedulingComplete} />
      <Screen name='Scheduling' component={Scheduling} />
      <Screen name='CarDetails' component={CarDetails} />
    </StackNavigator>
  )
}

export default StackRoutes
