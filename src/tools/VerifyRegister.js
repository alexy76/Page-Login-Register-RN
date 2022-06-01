export const validityFormScreenOne = (data) => {

    const regexPassword  = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const regexMail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    const verifyPassword = new RegExp(regexPassword);
    const verifyMail = new RegExp(regexMail);

    if (verifyPassword.test(data.password) && verifyMail.test(data.email) && data.password === data.confirmPassword) {
        return true
    } else {
        return false
    }
}

export const validityFormScreenTwo = (data) => {

    const regexName = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/

    const verifyName = new RegExp(regexName);

    if (verifyName.test(data.firstname) && verifyName.test(data.lastname)) {
        return true
    } else {
        return false
    }
}