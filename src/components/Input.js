import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import RegisterContext from '../contexts/RegisterContext'
import React, { useState, useContext } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'


const Input = ({config}) => {

    const contextValue = useContext(RegisterContext)

    const { label, keyword, placeholder, secureText, checkTextEntry, regex, errorMsg } = config

    const regEx = new RegExp(regex);

    const [textInput, setTextInput] = useState('')
    const [showPassword, setShowPassword] = useState(secureText)
    const [error, setError] = useState(false)


    const checkInput = (e) => {

        if(checkTextEntry) {

            if(!regEx.test(e.nativeEvent.text) || e.nativeEvent.text === '') {
                setError(true)
            }else {
                setError(false)
                const copyContext = {...contextValue}
                copyContext[keyword] = e.nativeEvent.text
                contextValue.setContext(copyContext)
                console.log(copyContext)

                if(copyContext.screen === 1) {
                    if(copyContext.email.length > 0 && copyContext.password.length > 0 && copyContext.confirmPassword.length > 0 && copyContext.password === copyContext.confirmPassword) {
                        contextValue.setShowButtonNextRegister(true)
                        copyContext.screen = 2
                        contextValue.setContext(copyContext)
                    }
                }

                if(copyContext.screen === 2) {
                    if(copyContext.firstname.length > 0 && copyContext.lastname.length > 0) {
                        contextValue.setShowButtonSaveRegister(true)
                    }
                }
            }
        }
    }


  return (
      <View style={styles.viewGlobal}>

        <Text style={styles.label}>{label}</Text>

        {!secureText &&
            <TextInput
                style={styles.input}
                onChangeText={setTextInput}
                value={textInput}
                secureTextEntry={showPassword}
                placeholder={placeholder}
                onBlur={checkInput} 
            />

            
        }

        {secureText &&
            <View style={{ flexDirection : 'row'}}>

                <View style={{ flex : 8 }}>
                    <TextInput
                        style={styles.inputPwd}
                        onChangeText={setTextInput}
                        value={textInput}
                        secureTextEntry={showPassword}
                        placeholder={placeholder}
                        onBlur={checkInput} 
                    />
                </View>

                <View style={{ flex : 2 }}>
                    <TouchableOpacity onPress={()=> setShowPassword(!showPassword)} style={styles.eyeContainer}>
                        <Icon name={ showPassword ? 'eye' : 'eye-slash' } style={{ fontSize : 24, color : 'white' }}/>
                    </TouchableOpacity>
                </View>

            </View>
        }

        {error && <Text style={styles.errorText}>{errorMsg}</Text>}

      </View>
  )
}

export default Input

const styles = StyleSheet.create({
    viewGlobal : {
        padding : 10
    },
    label : {
        color : 'gray', 
        marginStart : 12, 
        fontSize : 16
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius : 10
    },
    inputPwd : {
        height: 40,
        margin: 12,
        borderEndColor : 'purple',
        borderWidth: 1,
        padding: 10,
        borderTopLeftRadius : 10,
        borderBottomLeftRadius : 10,
        marginStart : 12,
        marginBottom : 12,
        marginTop : 12,
        marginEnd : 0
    },
    eyeContainer : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
        marginStart : 0,
        marginBottom : 12,
        marginTop : 12,
        marginEnd : 12,
        backgroundColor : 'purple',
        borderTopRightRadius : 10,
        borderBottomRightRadius : 10,
    },
    errorText : { 
        color : 'purple',
        marginStart : 12, 
        fontSize : 10 
    }
});