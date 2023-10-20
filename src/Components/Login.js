import React, { Component } from 'react'
import { Navigate } from 'react-router-dom'
const EmpA = {
    username: "emp",
    password: "123"
}
export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: EmpA.username,
            password: EmpA.password,
            logged: ''
        }
    }
    onChangeInput = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const { username, password } = this.state;
        if ((username === EmpA.username && password === EmpA.password)) {
            this.setState({ logged: true })
            localStorage.setItem('user', username);
            localStorage.setItem('wallet', '10000');
        } else {
            alert('Wrong user id or password');
        }
    }
    render() {
        if (this.state.logged) {
            return <Navigate to='/' />
        }
        return (
            <div>
                <div className='login-container'>
                    <h1 className='login-head'>Login</h1><br />
                    <form onSubmit={this.handleSubmit}>
                        <span className="login-text">Username</span>
                        <input type="text"
                            name="username"
                            value={this.state.username}
                            onChange={this.onChangeInput}
                            placeholder="username.." />
                        <br /><br />
                        <span className='login-text'>Password</span>
                        <input type="password"
                            name="password"
                            value={this.state.password}
                            onChange={this.onChangeInput}
                            placeholder="password.." />
                        <br /><br />
                        <button className='addtocart'>Login</button><br /><br />
                    </form>
                </div>
            </div>
        )
    }
}
