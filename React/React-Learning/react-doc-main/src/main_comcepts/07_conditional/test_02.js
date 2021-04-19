import React from 'react';
import ReactDOM from 'react-dom';
import '../../index.css';
import Greeting from "./test_01";

function LoginButton(props) {
    return (
        <button onClick={props.onClick}>
            Login
        </button>
    );
}

function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>
            Logout
        </button>
    );
}

class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isLogggedIn: false};
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
    }

    handleLoginClick() {
        this.setState({isLogggedIn: true});
    }

    handleLogoutClick() {
        this.setState({isLogggedIn: false});
    }

    render() {
        const isLogggedIn = this.state.isLogggedIn;
        let button;
        if (isLogggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick}/>
        } else {
            button = <LoginButton onClick={this.handleLoginClick}/>
        }

        // # Why？ 点击按钮Greeting组件文字部分不刷新，看props有值，但是props.isLoggedIn是undefined
        return (
            <div>
                <Greeting isLogggedIn={isLogggedIn}/>
                {button}
            </div>
        );
    }
}

ReactDOM.render(
    <LoginControl/>,
    document.getElementById('root')
);