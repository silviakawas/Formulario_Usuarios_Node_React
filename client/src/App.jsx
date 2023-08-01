import { useEffect, useState } from 'react';
import Form from './components/form/Form';
import { GlobalStyles } from './styles/GlobalStyles';
import Users from './components/users/Users';
import EditUser from './components/editUser/EditUser';


const App = () => {

	const [isEditing, setIsEditing] = useState(false);
	const [userToEdit, setUserToEdit] = useState({
		id: '',
		name: '',
		username: '',
		age: '',
		email: '',
		active: ''
	})

	const [users, setUsers] = useState([]);

	useEffect(()=>{
		getAllUsers(setUsers);
	}, []); /* Se ponen los corchetes para que solo se ejecute una vez. Array de dependencias */

	return (
		
		<>	
			<GlobalStyles />
			{isEditing ? (
				<EditUser 
					setUsers={setUsers} 
					userToEdit={userToEdit} 
					setUserToEdit={setUserToEdit}
					setIsEditing={setIsEditing}
				/>) : (
				<Form setUsers={setUsers}/>
				)}
			
			<Users users={users} setUsers={setUsers} setIsEditing={setIsEditing} setUserToEdit={setUserToEdit}/>
			
		</>
	);
};

const getAllUsers = async setUsers=>{

	const response = await fetch('http://localhost:3000/api/users');

	const data = await response.json();

	setUsers(data);

};

export default App;
