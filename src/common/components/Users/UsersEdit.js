/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';
 
const EditUsers = () => {
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [timezone, setTimezone] = useState('');
    const [birthday, setBirthday] = useState('');
    const [anniversary, setAnniversary] = useState('');
    const history = useNavigate();
    const { id } = useParams();
 
    const updateUsers = async (e) => {
        e.preventDefault();
        await axios.patch(`http://localhost:8080/users/edit/`,{
            first_name: first_name,
            last_name: last_name,
            timezone: timezone,
            birthday: birthday,
            anniversary: anniversary,
            id: id
        });
        history.push("/");
    }
 
    useEffect(() => {
        getUsersById();
    }, []);
 
    const getUsersById = async () => {
        const response = await axios.get(`http://localhost:8080/api/users/${id}`);
        setFirstName(response.data.first_name);
        setLastName(response.data.last_name);
        setTimezone(response.data.timezone);
        setBirthday(response.data.birthday);
        setAnniversary(response.data.anniversary);
    }
 
    return (
        <div>
            <form onSubmit={ updateUsers }>


            <div className="field">
                    <label className="label">First Name</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="First Name"
                        maxlength="100"
                        value={ first_name }
                        onChange={ (e) => setFirstName(e.target.value) }
                    />
                </div>
 
                <div className="field">
                    <label className="label">Last Name</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Last Name"
                        maxlength="100"
                        value={ last_name }
                        onChange={ (e) => setLastName(e.target.value) }
                    />
                </div>
 
                <div className="field">
                    <label className="label">Timezone</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Timezone"
                        maxlength="100"
                        value={ timezone }
                        onChange={ (e) => setTimezone(e.target.value) }
                    />
                </div>

                <div className="field">
                    <label className="label">Birthday</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Birthday"
                        maxlength="100"
                        value={ birthday }
                        onChange={ (e) => setBirthday(e.target.value) }
                    />
                </div>

                <div className="field">
                    <label className="label">Anniversary</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Anniversary"
                        maxlength="100"
                        value={ anniversary }
                        onChange={ (e) => setAnniversary(e.target.value) }
                    />
                </div>


                
 
                <div className="field">
                    <button className="button is-primary">Update</button>
                </div>
            </form>
        </div>
    )
}
 
export default EditUsers