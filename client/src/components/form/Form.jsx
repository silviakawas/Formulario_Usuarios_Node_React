import { useState } from "react";
import { StyledForm, StyledFormCont, StyledInput } from "./styles";

const Form = ({setUsers}) =>{

    const [userData, setUserData] = useState({
        title: '',
        name: '',
        username: '',
        age: '',
        email: '',
        active: true
    });

    console.log(userData);
    return(

        <StyledFormCont>

            <h1>¡Regístrate!</h1>

            <StyledForm id='form' onSubmit={e=>handleSubmit(e, userData, setUsers)}>

                <label htmlFor='title'>Título:</label>
                <StyledInput 
                    onInput={e => setUserData({...userData, title: e.target.value})} 
                    type='text' 
                    name='title' 
                    id='title' />

                <label htmlFor='name'>Nombre:</label>
                <StyledInput
                    onInput={e => setUserData({...userData, name: e.target.value})} 
                    type='text' 
                    name='name' 
                    id='name' />

                <label htmlFor='username'>Nombre de usuario:</label>
                <StyledInput 
                    onInput={e => setUserData({...userData, username: e.target.value})} 
                    type='text' 
                    name='username' 
                    id='username' />

                <label htmlFor='age'>Edad:</label>
                <StyledInput 
                    onInput={e => setUserData({...userData, age: e.target.value})} 
                    type='number' 
                    name='age' 
                    id='age' />

                <label htmlFor='email'>Correo electrónico:</label>
                <StyledInput
                    onInput={e => setUserData({...userData, email: e.target.value})} 
                    type='email' 
                    name='email' 
                    id='email' />

                <label htmlFor='active'>Activo:</label>
                <StyledInput
                    onInput={e => setUserData({...userData, active: e.target.value})} 
                    type='checkbox' 
                    name='active' 
                    id='active'/>

                <StyledInput type='submit' value='Crear usuario' />
            
            </StyledForm>

        </StyledFormCont>
    
    );
};

const handleSubmit = async (event, userData, setUsers) =>{
    event.preventDefault();

    const response = await fetch('http://localhost:3000/api/users', {
        method: 'POST',
        body: JSON.stringify(userData),
        headers: {
            Accept: '*/*',
            'Content-Type': 'application/json'
        }
    });

	const data = await response.json();
    console.log(data);
	setUsers(data);
    
};

export default Form;