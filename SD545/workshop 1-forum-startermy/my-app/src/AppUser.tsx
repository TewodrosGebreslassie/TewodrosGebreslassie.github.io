import React, { useState, ChangeEvent } from 'react';

interface Person {
    username: string;
    age: string;
    sex: string;
    height: string;
}

function PersonComponent() {
    const [person, setPerson] = useState<Person | null>({
        username: '',
        age: '',
        sex: '',
        height: '' });


    const handlePerson = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setPerson(prevPerson => ({...prevPerson!,[name]: value || ''}));
    }
    
    return (
        <div>
            <input
                type="text"
                name="username"
                value={person?.username || ''}
                onChange={handlePerson}
                placeholder="Username"
            />
            <input
                type="text"
                name="age"
                value={person?.age || ''}
                onChange={handlePerson}
                placeholder="Age"
            />
            <input
                type="text"
                name="sex"
                value={person?.sex || ''}
                onChange={handlePerson}
                placeholder="Sex"
            />
            <input
                type="text"
                name="height"
                value={person?.height || ''}
                onChange={handlePerson}
                placeholder="Height"
            />
        </div>
    );
}

export default PersonComponent;
