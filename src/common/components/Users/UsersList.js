import { useState, useEffect } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";
 
const UsersList = () => {
    const [users, setUsers] = useState([]);
 
    useEffect(() => {
        getUsers();
    }, []);
 
    const getUsers = async () => {
        const response = await axios.get('http://localhost:8080/api/users');
        setUsers(response.data);
    }
 
    const deleteUsers = async (id) => {
        await axios.delete(`http://localhost:8080/api/users/${id}`);
        getUsers();
    }
 
    return (
        <div>
            <Link to="/add" className="button is-primary mt-2">Add New</Link>
            <table className="table is-striped is-fullwidth">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Timezone</th>
                        <th>Birthday</th>
                        <th>Anniversary</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    { users.map((user, index) => (
                        <tr key={ user.id }>
                            <td>{ user.first_name }</td>
                            <td>{ user.last_name }</td>
                            <td>{ user.timezone }</td>
                            <td>{ user.birthday }</td>
                            <td>{ user.anniversary }</td>
                            <td>
                                <Link to={`/edit/${user.id}`} className="button is-small is-info">Edit</Link>
                                <button onClick={ () => deleteUsers(user.id) } className="button is-small is-danger">Delete</button>
                            </td>
                        </tr>
                    )) }
                     
                </tbody>
            </table>
        </div>
    )
}
 
export default UsersList