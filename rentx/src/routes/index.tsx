import React from 'react'

import StackRoutes from './stack.routes'

import { NavigationContainer as NavigationProvider } from '@react-navigation/native'

const Routes = () => {
  return (
    <NavigationProvider>
      <StackRoutes />
    </NavigationProvider>
  )
}

export default Routes
