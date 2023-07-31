import { useState } from 'react';
import Form from './components/form/Form';
import { GlobalStyles } from './styles/GlobalStyles';
import Users from './components/users/Users';


const App = () => {

	const [users, setUsers] = useState([]);

	return (
		
		<>	
			<GlobalStyles />
			<h1>¡Regístrate!</h1>
			<Form setUsers={setUsers}/>´
			<Users users={users} setUsers={setUsers}/>
			
		</>
	);
};

export default App;
