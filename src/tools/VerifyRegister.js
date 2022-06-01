import { regexMail, regexPassword, regexName } from '../tools/Regex';


export const validityFormScreenOne = (data) => {
    return regexPassword.test(data.password) && regexMail.test(data.email) && data.password === data.confirmPassword ? true : false
}

export const validityFormScreenTwo = (data) => {
    return regexName.test(data.firstname) && regexName.test(data.lastname) ? true : false
}