import { StyledUsers, StyledUsersCont} from "./styles";

const Users = ({ users, setUsers, setIsEditing, setUserToEdit }) => {

	if(users.length === 0) return <h1>No hay usuarios</h1>

	return(

		<StyledUsersCont>
			<StyledUsers>

				{users.map(user => (
					<div key={user.userId}>
						<h2>
							{user.title+[' ']}
							{user.name}
						</h2>
						<p>
							Nombre de usuario: {user.username}<br/>
							Edad: {user.age}<br/>
							Correo electrónico: {user.email}<br/>
							Usuario activo: {user.active}
						</p>
						<button onClick={()=>deleteUser(user.userId, setUsers)}>Borrar</button>
						<button onClick={()=> {
							setIsEditing(true);
							setUserToEdit(user);
						}}>Editar</button>
					</div>
					
				))}

			</StyledUsers>
		</StyledUsersCont>

	);
	
};

const deleteUser = async (id, setUsers) =>{

	const response = await fetch(`http://localhost:3000/api/users/${id}`, {
        method: 'DELETE',
    });

	const data = await response.json();
	setUsers(data);

}

export default Users;