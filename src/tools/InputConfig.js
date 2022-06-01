import { regexMail, regexPassword, regexName } from '../tools/Regex';

export const email = {
    label : "Email",
    keyword : "email",
    placeholder : "Entrez votre email",
    secureText : false,
    checkTextEntry : true,
    regex : regexMail,
    errorMsg : "Le format de l'email est invalide"
}

export const passwordLogin  = {
    label : "Mot de passe",
    keyword : "password",
    placeholder : "Entrez votre mot de passe",
    secureText : true,
    checkTextEntry : false,
    regex : regexPassword,
    errorMsg : "Le mot de passe doit contenir au moins 8 caractères dont au moins une majuscule, une minuscule et un chiffre"
}

export const passwordRegister  = {
    label : "Mot de passe",
    keyword : "password",
    placeholder : "Entrez votre mot de passe",
    secureText : true,
    checkTextEntry : true,
    regex : regexPassword,
    errorMsg : "Le mot de passe doit contenir au moins 8 caractères dont au moins une majuscule, une minuscule et un chiffre"
}

export const confirmPasswordRegister  = {
    label : "Confirmation du mot de passe",
    keyword : "confirmPassword",
    placeholder : "Entrez votre mot de passe",
    secureText : true,
    checkTextEntry : true,
    regex : regexPassword,
    errorMsg : "Le mot de passe doit contenir au moins 8 caractères dont au moins une majuscule, une minuscule et un chiffre"
}

export const firstname  = {
    label : "Prénom",
    keyword : "firstname",
    placeholder : "Entrez votre prénom",
    secureText : false,
    checkTextEntry : true,
    regex : regexName,
    errorMsg : "Le format du prénom est invalide"
}

export const lastname  = {
    label : "Nom",
    keyword : "lastname",
    placeholder : "Entrez votre nom",
    secureText : false,
    checkTextEntry : true,
    regex : regexName,
    errorMsg : "Le format du nom est invalide"
}