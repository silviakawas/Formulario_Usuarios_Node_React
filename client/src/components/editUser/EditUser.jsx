import { StyledForm, StyledFormCont, StyledInput } from './styles';

const EditUser = ({ setUsers, userToEdit, setUserToEdit, setIsEditing }) => {
	return (
		<StyledFormCont>
			<h1>Editar usuario</h1>

			<StyledForm
				id='form'
				onSubmit={e => handleSubmit(e, userToEdit, setUsers, setIsEditing)}
			>
				<label htmlFor='title'>Título:</label>
				<StyledInput
					onInput={e => setUserToEdit({ ...userToEdit, title: e.target.value })}
					type='text'
					name='title'
					id='title'
					value={userToEdit.title}
				/>

				<label htmlFor='name'>Nombre:</label>
				<StyledInput
					onInput={e => setUserToEdit({ ...userToEdit, name: e.target.value })}
					type='text'
					name='name'
					id='name'
					value={userToEdit.name}
				/>

				<label htmlFor='username'>Nombre de usuario:</label>
				<StyledInput
					onInput={e =>
						setUserToEdit({ ...userToEdit, username: e.target.value })
					}
					type='text'
					name='username'
					id='username'
					value={userToEdit.username}
				/>

				<label htmlFor='age'>Edad:</label>
				<StyledInput
					onInput={e => setUserToEdit({ ...userToEdit, age: e.target.value })}
					type='number'
					name='age'
					id='age'
					value={userToEdit.age}
				/>

				<label htmlFor='email'>Correo electrónico:</label>
				<StyledInput
					onInput={e => setUserToEdit({ ...userToEdit, email: e.target.value })}
					type='email'
					name='email'
					id='email'
					value={userToEdit.email}
				/>

				<label htmlFor='active'>Activo:</label>
				<StyledInput
					onInput={e =>
						setUserToEdit({ ...userToEdit, active: e.target.value })
					}
					type='checkbox'
					name='active'
					id='active'
					value={userToEdit.active}
				/>

				<StyledInput type='submit' value='Guardar usuario' />
			</StyledForm>
		</StyledFormCont>
	);
};

const handleSubmit = async (event, userToEdit, setUsers, setIsEditing) => {
	event.preventDefault();

	const { userId } = userToEdit;
	const response = await fetch(`http://localhost:3000/api/users/${userId}`, {
		method: 'PATCH',
		body: JSON.stringify(userToEdit),
		headers: {
			Accept: '*/*',
			'Content-Type': 'application/json'
		}
	});

	const data = await response.json();
	setUsers(data);
    setIsEditing(false);
};

export default EditUser;
