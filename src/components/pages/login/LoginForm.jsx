import React, { useState } from 'react'

export default function LoginForm() {
     //states
    const[inputValue, setInputValue] = useState("")

    //comportements
    const handlesubmit = (event) => {
        event.preventDefault()
        alert(`Bienvenue ${inputValue}`)
        setInputValue("")
        
    }

     const handleChange = (event) => {
        setInputValue(event.target.value)
      
    }
    //affichage(render)
    return (
        <div>
            <form action="submit" onSubmit={handlesubmit}>
                <h1>Bienvenue chez nous</h1>
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
