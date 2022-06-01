import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SuccessRegister = ({navigation, route}) => {

    console.log(route.params.data)
  return (
    <View>
      <Text>SuccessRegister</Text>
    </View>
  )
}

export default SuccessRegister

const styles = StyleSheet.create({})