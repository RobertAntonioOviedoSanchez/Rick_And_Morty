import Style from "./Form.module.css"
import validation from "../Validation/Validation"
import { useState } from "react"

const Form = ({ login }) => {

    const [ userData, setUserData ] = useState({
        email: "",
        password: "",
    })

    const [ errors, setErrors ] = useState({})

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value //Bracket Notation porque es una propiedad del objeto que es variable, puede ser email o password
        })
        
        setErrors(validation({ //ejecuto validation y lo que va a setear es su retorno
            ...userData,
            [event.target.name]: event.target.value
        }))
    }

    const handleSubmit  = (event) => {
        event.preventDefault()
        login(userData)
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email: </label>
                    <input type="email" name="email" value={userData.email} onChange={handleChange} />
                    {errors.email ? <p style={{color: "red"}}>{errors.email}</p> : null}
                

                <label htmlFor="password">Password: </label>
                    <input type="password" name="password" value={userData.password} onChange={handleChange} />
                    {errors.password ? <p style={{color: "red"}}>{errors.password}</p> : null}
                
                <button>Submit</button>
            </form>
        </div>
    )

}

export default Form