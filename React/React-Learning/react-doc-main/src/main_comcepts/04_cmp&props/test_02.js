import React from 'react';
import ReactDOM from 'react-dom';
import '../../index.css';

// 组合组件
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

function MyApp() {
    return (
        <div>
            <Welcome name="Sara"/>
            <Welcome name="Cahal"/>
            <Welcome name="Edite"/>
        </div>
    );
}

ReactDOM.render(
    <MyApp/>,
    document.getElementById('root')
);