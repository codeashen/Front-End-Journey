import React from 'react';
import ReactDOM from 'react-dom';
import '../../index.css';

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName: 'Lucifer',
    lastName: 'Wang'
};

const element = (
    <h1>
        Hello, {formatName(user)}!
    </h1>
);

ReactDOM.render(
    element,
    document.getElementById('root')
);