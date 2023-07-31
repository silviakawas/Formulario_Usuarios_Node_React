import { StyledForm, StyledInput } from "./styles";

const Form = ({setUsers}) =>{
    return(
        <StyledForm id='form' onSubmit={e => handleSubmit(e, setUsers)}>
            <label htmlFor='title'>Título:</label>
            <StyledInput type='text' name='title' />

            <label htmlFor='name'>Nombre:</label>
            <StyledInput type='text' name='name' />

            <label htmlFor='username'>Nombre de usuario:</label>
            <StyledInput type='text' name='username' />

            <label htmlFor='age'>Edad:</label>
            <StyledInput type='number' name='age' />

            <label htmlFor='email'>Correo electrónico:</label>
            <StyledInput type='email' name='email' />

            <label htmlFor='active'>Activo:</label>
            <StyledInput type='checkbox' name='active'/>

            <StyledInput type='submit' value='Crear usuario' />
            
        </StyledForm>
    );
};

const handleSubmit = async(event, setUsers) =>{
    event.preventDefault();

    const response = await fetch('http://localhost:3000/api/users/createUser', {
        method: 'POST',
        body: JSON.stringify({
            title: event.target.title.value,
            name: event.target.name.value,
            username : event.target.username.value,
            age: event.target.age.value,
            email: event.target.email.value
        }),
        headers: {
            Accept: '*/*',
            'Concept-Type': 'application/json'
        }
    });

    const data = await response.json();
    setUsers(data);
}

export default Form;