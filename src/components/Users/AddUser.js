import React, { useState } from 'react';

import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

const AddUser = (props) => {
    const [username, setUsername] = useState('');
    const [age, setAge] = useState('');
    const [error, setError] = useState();
    const submitHandler = (e) => {
        e.preventDefault();
        if (username.trim().length === 0 || age.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values)'
            })
            return;
        }
        if (+age < 1) {
            setError({
                title: 'Invalid age',
                message: 'Age must me positive'
            })
            return;
        }

        props.onAddUser(username, age);
        setUsername('');
        setAge('');
    }

    const usernameHandler = (e) => {
        setUsername(e.target.value)
    }

    const ageHandler = (e) => {
        setAge(e.target.value)
    }
 
    const errorHandler = () => {
        setError(null);
    }

    return <div>
        {error &&<ErrorModal onConfirm = {errorHandler} title={error && error.title} message={error && error.message}></ErrorModal>}
            <Card className={classes.input}>
                <form onSubmit={submitHandler}>
                    <label htmlFor="username" >Username</label>
                    <input id="username" value={username} type="text" onChange={usernameHandler} />
                    <label htmlFor="age">Age</label>
                    <input id="age" type="number" value={age} onChange={ageHandler} />
                    <Button type="submit" >Add User</Button>
                </form>
            </Card>
    </div>
}


export default AddUser;