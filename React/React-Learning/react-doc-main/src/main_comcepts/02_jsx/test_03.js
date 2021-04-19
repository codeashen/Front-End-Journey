import React from 'react';
import ReactDOM from 'react-dom';
import '../../index.css';

const user = {
    firstName: 'Lucifer',
    lastName: 'Wang'
};

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

// JXS 使用表达式
function getGreeting(user) {
    if (user) {
        return <h1>Hello, {formatName(user)}!</h1>;
    }
    return <h1>Hello, Stranger.</h1>;
}

ReactDOM.render(
    getGreeting(user),
    document.getElementById('root')
);