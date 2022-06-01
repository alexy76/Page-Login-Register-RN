import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const HomeScreen = ({navigation}) => (

      <View style={{flex : 1}}>

        <View style={styles.viewImage}>
            <Image source={require('../../assets/images/LogoHome.png')} style={styles.image} />
        </View>

        <View style={styles.viewButton}>
            <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.buttonLogin}>
                <Text style={styles.textButtonLogin}>SE CONNECTER</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Register')} style={styles.buttonRegister}>
                <Text style={styles.textButtonRegister}>S'INSCRIRE</Text>
            </TouchableOpacity>
        </View>

      </View>
)

export default HomeScreen

const styles = StyleSheet.create({
    viewImage : {
        flex : 2,
        justifyContent : 'center',
        alignItems : 'center',
    },
    viewButton : {
        flex : 1,
        alignItems : 'center'
    },
    image : {
        width : '100%',
        height : '100%',
        resizeMode : 'contain'
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
    buttonRegister : {
        borderWidth : 1, 
        borderColor : 'gray', 
        borderStyle : 'solid', 
        width : '65%', 
        padding : 15, 
        textAlign : 'center', 
        marginTop : 10,
        borderRadius : 20
    },
    textButtonLogin : {
        color : 'white',
        fontWeight : 'bold',
        textAlign : 'center'
    },
    textButtonRegister : {
        color : 'grey',
        fontWeight : 'bold',
        textAlign : 'center'
    }
})