import React, { useState, useEffect } from 'react'
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'
import { email, passwordRegister, confirmPasswordRegister, firstname, lastname } from '../tools/InputConfig'
import RegisterContext from '../contexts/RegisterContext'
import Input from '../components/Input'


const RegisterScreen = ({navigation, route}) => {

  const contextValue = {
      email : "",
      password : "",
      confirmPassword : "",
      firstname : "",
      lastname : "",
      screen : 1
  }

  const [context, setContext] = useState(contextValue)
  const [showNextRegister, setShowNextRegister] = useState(false)
  const [showButtonNextRegister, setShowButtonNextRegister] = useState(false)
  const [showButtonSaveRegister, setShowButtonSaveRegister] = useState(false)


  useEffect(() => {

    const copyContext = {
      ...context,
      showNextRegister : showNextRegister,
      setContext : setContext,
      setShowNextRegister : setShowNextRegister,
      setShowButtonNextRegister : setShowButtonNextRegister,
      setShowButtonSaveRegister : setShowButtonSaveRegister
    }
    setContext(copyContext)
  }, [])


  return (

    <RegisterContext.Provider value={context}>

      <View style={styles.globalView}>

        {!showNextRegister &&
          <>
            <Input config={email} route={route.name} />
            <Input config={passwordRegister} route={route.name} />
            <Input config={confirmPasswordRegister} route={route.name} />
          </>
        }

        {showNextRegister &&
          <>
            <Input config={firstname} route={route.name} />
            <Input config={lastname} route={route.name} />
          </>
        }


        {showButtonNextRegister && !showNextRegister &&

          <View style={styles.viewButton}>
              <TouchableOpacity 
                onPress={() => { 
                  setShowNextRegister(true); 
                  setShowButtonNextRegister(false); 
                  let copyContext = {...context}
                  copyContext.screen = 2
                  setContext(copyContext)
                }} 
                style={styles.buttonNext}
              >
                <Text style={styles.textButtonNext}>SUIVANT</Text>
              </TouchableOpacity>
          </View>
        }


        {showButtonSaveRegister && showNextRegister &&

          <View style={styles.viewButton}>
              <TouchableOpacity 
                onPress={() => navigation.replace('SuccessRegister', { data : context })} 
                style={styles.buttonNext}
              >
                  <Text style={styles.textButtonNext}>TERMINE</Text>
              </TouchableOpacity>
          </View>
        }

      </View>

    </RegisterContext.Provider>
    
  )
}

export default RegisterScreen

const styles = StyleSheet.create({
  globalView : {
    flex : 1, 
    marginTop : 30
  },
  buttonNext : {
    borderWidth : 1, 
    borderColor : 'gray', 
    borderStyle : 'solid',
    borderRadius : 20, 
    width : '65%', 
    padding : 15, 
    backgroundColor : 'purple', 
    marginTop : 10,
    alignItems : 'center'
  },
  textButtonNext : {
      color : 'white',
      fontWeight : 'bold',
  },
  viewButton : {
      flex : 1,
      alignItems : 'center',
  }
})