const regexPassword  = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const regexMail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const regexName = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/
//const regexDate = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/
//const regexCivility = /^(M|Mme|Mlle)$/


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