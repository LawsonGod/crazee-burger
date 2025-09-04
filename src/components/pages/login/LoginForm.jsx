import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

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
            <LoginFormStyle action="submit" onSubmit={handlesubmit}>
                <h1>Bienvenue chez nous !</h1>
                <br />
                <hr />
                <h2>Connectez-vous</h2>
                <input 
                    value = {inputValue} 
                    onChange={handleChange} 
                    type="text" 
                    placeholder= "Entrez votre prénom" 
                    required 
                />
                <button>Accéder à mon espace</button>
            </LoginFormStyle>
        
        </div>
    )
}

const LoginFormStyle  = styled.form`
    width: 464px;
    height: 438.31px;
    top: 313.95px;
    left: 524px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    margin-top: 100px;
    /* border: 1px solid white; */

    h1{
        width: 310px;
        height: 61px;
        top: 72.16px;
        left: 76.14px;
        font-size: 48px;
        font-family: 'Amatic SC', sans-serif;
        font-weight: 700;
        color: #ffffff;
        font-style: normal;
        line-height: 61px;
        margin-bottom: 5px;
    }
    hr{
        width: 400px;
        height: 3px;
        top: 165.31px;
        left: 32px;
        background-color: #F56A2C;
        border: 1px solid #F56A2C;

    }
    h2{
        width: 171px;
        height: 46px;
        top: 208.31px;
        left: 146.55px;
        font-size: 36px;
        font-family: 'Amatic SC', sans-serif;
        font-weight: 700;
        color: #ffffff;
        font-style: normal; 
        line-height: 46px;
        margin-bottom: 15px;
    }
    input{
        width: 400px;
        height: 55px;
        border-radius: 5px;
        border: none;
        margin-bottom: 20px;
        font-weight: 400;
        font-size: 15px;
        font-family: Arial, sans-serif;
        font-weight: 400;
    }
    input::placeholder{
        padding-left: 51.8px;
        padding-top: 19px;
        padding-bottom: 19px;
        color: #D3D3D3;
    }
    button{
        width: 400px;
        height: 55px;
        border-radius: 5px;
        background-color: #ff9F1B;
        font-size: 15px;
        font-family: Arial, sans-serif;
        font-weight: 700;
        border: 1px solid #ff9F1B;
        color: white;
    }
    
`;
