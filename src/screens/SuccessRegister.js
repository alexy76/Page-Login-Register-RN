import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const SuccessRegister = ({navigation, route}) => {

  console.log(route.params.data)

  return (
    <View style={{ flex : 1 }}>

      <View style={styles.viewImageSuccess}>
          <Image source={require('../../assets/images/success.png')} style={styles.image}/> 
          <Text style={styles.textSuccess}>Votre compte a été créé avec succès</Text>
      </View>


      <View style={styles.viewButtonLogin}>
        <TouchableOpacity onPress={() => navigation.replace('Login')} style={styles.buttonLogin}>
            <Text style={styles.textButtonLogin}>SE CONNECTER</Text>
        </TouchableOpacity>
      </View>


    </View>
    
  )
}

export default SuccessRegister

const styles = StyleSheet.create({
  viewImageSuccess : { 
    flex : 8, 
    justifyContent : 'center', 
    alignItems : 'center' 
  },
  viewButtonLogin : {
    flex : 2, 
    justifyContent : 'center', 
    alignItems : 'center'
  },
  buttonLogin : {
    borderWidth : 1, 
    borderColor : 'gray', 
    borderStyle : 'solid', 
    width : '65%', 
    padding : 15, 
    backgroundColor : 'purple', 
    textAlign : 'center', 
    marginTop : 10,
    borderRadius : 20,
  },
  textButtonLogin : {
      color : 'white',
      fontWeight : 'bold',
      textAlign : 'center'
  },
  image : {
    width : 200,
    height : 200
  },
  textSuccess : { 
    color: 'gray', 
    textAlign : 'center', 
    fontSize : 20, 
    fontWeight : 'bold', 
    paddingHorizontal : 30, 
    marginTop : 20
  }
})