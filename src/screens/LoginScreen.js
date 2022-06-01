import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import { email, passwordLogin } from '../tools/InputConfig'
import Input from '../components/Input'


const LoginScreen = ({navigation, route}) => {

  return (
        <View style={styles.viewGlobal}>

            <View style={styles.viewPrimary}>
                <Image source={require('../../assets/images/Login.png')} style={styles.image} />
            </View>

            <View style={styles.viewSecondary}>

                <Input config={email} route={route.name} />
                <Input config={passwordLogin} route={route.name}/>

                <View style={styles.viewButtonLogin}>
                    <TouchableOpacity 
                        onPress={() => navigation.replace('Home')} 
                        style={styles.buttonLogin}
                    >
                        <Text style={styles.textButtonLogin}>SE CONNECTER</Text>
                    </TouchableOpacity>
                </View>
                

                <View style={styles.viewFooter}>
                    <Text>Pas encore inscrit ?</Text>
                    
                    <TouchableOpacity onPress={() => navigation.replace('Register')}>
                        <Text style={styles.textButtonRegister}>Créer un compte</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
        </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    viewGlobal : {
        flex : 1,
        marginBottom : 30
    },
    viewPrimary : {
        flex : 4,
        margin : 10,
        justifyContent : 'center',
        alignItems : 'center'
    },
    viewSecondary : {
        flex : 8
    },
    viewButtonLogin : {
        flex : 1, 
        alignItems : 'center'
    },
    viewFooter : {
        margin : 'auto', 
        marginTop : 8, 
        justifyContent:'center', 
        alignItems : 'center'
    },
    buttonLogin : {
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
    textButtonLogin : {
        color : 'white',
        fontWeight : 'bold',
    },
    textButtonRegister : {
        color : 'purple',
        fontWeight : 'bold'
    },
    image : {
        width : '100%',
        height : '100%',
        resizeMode : 'cover'
    },
})