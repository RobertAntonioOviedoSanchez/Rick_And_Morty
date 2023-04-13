
const validation = (userData) => { //userData es el state que viene del componente Form
    const errors = {};

    if (!/\S+@\S+\.\S+/.test(userData.email)) { //el Regex esta negado porque necesito trabajar solo si da false
        errors.email = "el email ingresado no es valido."
    }
    if (!userData.email) {
        errors.email = "debe ingresar un email."
    }
    if (userData.email.length > 35) {
        errors.email = "el email no debe superar los 35 caracteres."
    }
    if (!/.*\d+.*/.test(userData.password)) { //Regex para que la contraseña debe tener al menos un numero
        errors.password = "la contraseña debe contener minimo un numero."
    }
    if (userData.password.length < 6 || userData.password.length > 10) {
        errors.password = "la contraseña debe ser entre 6 y 10 caracteres."
    }


    return errors
}

export default validation