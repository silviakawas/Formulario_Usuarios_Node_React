import { StyledUsers, StyledUsersCont } from "./styles";

const Users = ({ users, setUsers}) => {

	if(users.length === 0) return <h1>No hay usuarios</h1>

	return(

		<StyledUsersCont>
			<StyledUsers>

				{users.map(user => (
					<div key={user.userId}>
						<p>
							{user.title}
						</p>
						<h2>
							{user.name}
						</h2>
						<p>
							{user.username}
							{user.age}
							{user.email}
							{user.active}
						</p>
						<button onClick={()=>deleteUser(user.userId, setUsers)}>Borrar</button>
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