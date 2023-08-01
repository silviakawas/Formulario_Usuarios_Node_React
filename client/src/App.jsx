import { useEffect, useState } from 'react';
import Form from './components/form/Form';
import { GlobalStyles } from './styles/GlobalStyles';
import Users from './components/users/Users';


const App = () => {

	const [users, setUsers] = useState([]);

	useEffect(()=>{
		getAllUsers(setUsers);
	}, []); /* Se ponen los corchetes para que solo se ejecute una vez. Array de dependencias */

	return (
		
		<>	
			<GlobalStyles />
			<Form setUsers={setUsers}/>
			<Users users={users} setUsers={setUsers}/>
			
		</>
	);
};

const getAllUsers = async setUsers=>{

	const response = await fetch('http://localhost:3000/api/users');

	const data = await response.json();

	setUsers(data);

};

export default App;
