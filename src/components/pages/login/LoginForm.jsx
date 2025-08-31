import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function LoginForm() {
     //states
    const[inputValue, setInputValue] = useState("")
    const navigate = useNavigate()

    //comportements
    const handlesubmit = (event) => {
        event.preventDefault()
        setInputValue("")
        navigate(`order/${inputValue}`)
        
    }

     const handleChange = (event) => {
        setInputValue(event.target.value)
      
    }
    //affichage(render)
    return (
        <div>
            <form action="submit" onSubmit={handlesubmit}>
                <h1>Bienvenue chez nous !</h1>
                <br />
                <h2>Connectez-vous</h2>
                <input 
                    value = {inputValue} 
                    onChange={handleChange} 
                    type="text" 
                    placeholder= "Entrez votre prenom..." 
                    required 
                />
                <button>Accédez à votre espace</button>
            </form>
        
        </div>
    )
}
