import React, { Component } from 'react'
import { Navigate } from 'react-router-dom';

export class login extends Component {

    constructor() {
        super();
        this.state = {
            login: false
        }
    }

    validateLogin = () => {
        const email = document.getElementById("exampleInputEmail1").value;
        const password = document.getElementById("exampleInputPassword1").value;
        if (email === "" || password === "") {
            alert("Wrong credentials");
        }
        else {
            this.props.login();
            (<Navigate to="/" />)
            this.setState({
                login: true
            })
        }
    }

    render() {
        return (
            this.state.login ? (<Navigate to="/" />) :
                (
                    <div className='container my-5' style={{ width: '20%' }}>
                        <div className='text-center'>login</div>
                        <form className='container my-5'>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input type="email" autoComplete="a" className="form-control my-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                            </div>
                            <div className="form-group my-5">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <input type="password" autoComplete="a" className="form-control my-2" id="exampleInputPassword1" placeholder="Password" />
                            </div>
                            <div className='d-flex justify-content-center'><button onClick={this.validateLogin} type="submit" className=" btn btn-sm btn-primary my-3">Submit</button></div>
                        </form>
                    </div>
                )
        )
    }
}

export default login