import { useState } from "react";
import axios from "axios";
import { User } from "../modules/user";
import './updateUser.css';

interface UpdateUserProps {
    updateUserList: () => void;
    user: User;
}

interface FormErrors {
    [key: string]: string;
}

function UpdateUser({ updateUserList, user }: UpdateUserProps) {
    const [first_name, setFirstName] = useState('');
    const [middle_name, setMiddleName] = useState('');
    const [last_name, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone_number, setPhoneNumber] = useState('');
    const [gender, setGender] = useState('');
    const [errors, setErrors] = useState<FormErrors>({});

    


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (first_name) {
            user.name.first_name = first_name;
        }
        if (middle_name) {
            user.name.middle_name = middle_name;
        }
        if (last_name) {
            user.name.last_name = last_name;
        }
        if (email) {
            user.email = email;
        }
        if (phone_number) {
            user.phone_number = phone_number;
        }
        if (gender) {
            user.gender = gender;
        }
        axios.put("http://localhost:3000/user/"+user._id, user)
            .then(result => {
                console.log(result);
                updateUserList();
                setFirstName('');
                setMiddleName('');
                setLastName('');
                setEmail('');
                setPhoneNumber('');
                setGender('');
            })
            .catch(err => console.error(err));

    };


    return (
        <div>
            <form onSubmit={handleSubmit} className="create-user-form">
                <div>
                    <label>First Name</label>
                    <input type="text" placeholder={user ? user.name.first_name.toString() : ''} value={first_name} onChange={(e) => { setFirstName(e.target.value); }} />
                    {errors.first_name && <span style={{ color: 'red' }}>{errors.first_name}</span>}
                </div>
                <div>
                    <label>Middle Name</label>
                    <input type="text" placeholder={user ? user.name.middle_name.toString() : ''} value={middle_name} onChange={(e) => { setMiddleName(e.target.value); }} />
                    {errors.middle_name && <span style={{ color: 'red' }}>{errors.middle_name}</span>}
                </div>
                <div>
                    <label>Last Name</label>
                    <input type="text" placeholder={user ? user.name.last_name.toString() : ''} value={last_name} onChange={(e) => { setLastName(e.target.value); }} />
                    {errors.last_name && <span style={{ color: 'red' }}>{errors.last_name}</span>}
                </div>
                <div>
                    <label>Email</label>
                    <input type="text" placeholder={user ? user.email.toString() : ''} value={email} onChange={(e) => { setEmail(e.target.value); }} />
                    {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
                </div>
                <div>
                    <label>Phone Number</label>
                    <input type="text" placeholder={user ? user.phone_number.toString() : ''} value={phone_number} onChange={(e) => { setPhoneNumber(e.target.value); }} />
                    {errors.phone_number && <span style={{ color: 'red' }}>{errors.phone_number}</span>}
                </div>
                <div>
                    <label>Gender</label>
                    <input type="text" placeholder={user ? user.gender.toString() : ''} value={gender} onChange={(e) => setGender(e.target.value)} />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default UpdateUser;
