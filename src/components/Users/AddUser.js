import React, { useState, useRef } from 'react';

import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import Wrapper from '../Helpers/Wrapper';

import ErrorModal from '../UI/ErrorModal';

const AddUser = (props) => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();
    const [error, setError] = useState();
    const submitHandler = (e) => {
        e.preventDefault();
        let enteredName = nameInputRef.current.value;
        let enteredAge = ageInputRef.current.value;
        if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values)'
            })
            return;
        }
        if (+enteredAge < 1) {
            setError({
                title: 'Invalid age',
                message: 'Age must me positive'
            })
            return;
        }

        props.onAddUser(enteredName, enteredAge);
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
    }
 
    const errorHandler = () => {
        setError(null);
    }

    return <Wrapper>
        {error &&<ErrorModal onConfirm = {errorHandler} title={error && error.title} message={error && error.message}></ErrorModal>}
            <Card className={classes.input}>
                <form onSubmit={submitHandler}>
                    <label htmlFor="username" >Username</label>
                    <input id="username" type="text" ref = {nameInputRef} />
                    <label htmlFor="age">Age</label>
                    <input id="age" type="number" ref = {ageInputRef} />
                    <Button type="submit" >Add User</Button>
                </form>
            </Card>
    </Wrapper>
}


export default AddUser;