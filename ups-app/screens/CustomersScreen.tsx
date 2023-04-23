import { View, Text } from 'react-native'
import React from 'react'
import {useTailwind} from 'tailwind-rn';
const CustomersScreen = () => {
    const tw = useTailwind();
  return (
    <View>
      <Text style={tw('text-blue-500')}>CustomersScreen</Text>
    </View>
  )
}

export default CustomersScreen