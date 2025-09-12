import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components';
import { IoChevronForward } from 'react-icons/io5';
import { BsPersonCircle } from "react-icons/bs";
import Input from './Input';

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
                <hr />
                <h2>Connectez-vous</h2>
                 <Input value={inputValue} 
                    onChange={handleChange} 
                    type="text" 
                    placeholder="Entrez votre prénom" 
                    required
                    iconInput = {<BsPersonCircle className='input-icon'/>}
                 />

                <button className='button-with-icon-container'>
                    <span>Accéder à mon espace</span>
                    <IoChevronForward className='icon-button'/>
                </button>
            </LoginFormStyle>
        </div>
    )
}

const LoginFormStyle  = styled.form`
    max-width: 500px;
    min-height: 400px;
    text-align: center;
    margin: 0px auto;
    padding: 2.5rem 2rem;
    border-radius: 5px;
    font-family: 'Amatic SC', cursive;

    h1{
        font-size: 48px;
        color: #ffffff;
    }
    hr{
        border: 1px solid #F56A2C;
        margin-bottom: 40px;
    }
    h2{
        margin:20px 10px 10px;
        font-size: 36px;
        color: #ffffff;
    }
    .button-with-icon-container{
        width: 100%;
        border-radius: 5px;
        background-color: #ff9F1B;
        font-size: 15px;
        font-family: Arial, sans-serif;
        font-weight: 700;
        border: 1px solid #ff9F1B;
        color: white;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        position: relative;
        white-space: nowrap;
        text-decoration: none;
        line-height: 1;
        padding: 18px 24px;

        &:hover:not(:disabled){
            background-color: white;
            color: #ff9F1B;
            border: 1px solid #ff9F1B;
            transition: all 200ms ease-in-out;
        }
        &:active{
            background-color: #ff9F1B;
            color: white;
            border: 1px solid #ff9F1B;
        }
        &:disabled{
            opacity: 0.5;
            cursor: not-allowed;
        }
        .icon-button{
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 15px;
            margin-left: 10px;
        }


    }
`;
