import * as React from "react";
import { connect } from "react-redux";
import { Link, Router } from "react-router";

import { ILoginCompProps } from '../../model';
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
const buttonStyle = {    width: '30%',
minWidth: '192px',
marginTop: '1.5rem',
textAlign: 'center',
color: 'blue' }
const LoginFormStyle = {
    display: 'flex',
msFlexDirection: 'column',
flexDirection: 'column',
msFlexAlign: 'center',
alignItems: 'center',
    padding: '16px',margin:'0px'
}
const fieldStyle = { width: '80%' }

interface IState {
    email: string;
    password: string
}
export default class LoginComponent extends React.Component<ILoginCompProps, any> {
    constructor() {
        super();
        this.state = {
            email: "",
            password: ""
        }
        this.handlerInput = this.handlerInput.bind(this);
    }
    handlerInput(e: any) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }


    render() {
        return (
            <div style={LoginFormStyle} className='LoginForm'>
                <TextField
                    floatingLabelText='Email'
                    name="email"
                    style={fieldStyle}
                    onChange={this.handlerInput}
                />


                <TextField
                    floatingLabelText='Password'
                    name='password'
                    type='password'
                    style={fieldStyle}
                    onChange={this.handlerInput}
                />


                <div className='LoginForm-Submit'>
                    <RaisedButton
                        label='Login'
                        primary
                        type='submit'
                        style={buttonStyle}
                        onClick={() => { this.props.click(this.state) } }
                    />

                </div>
                <br/>
                <div><Link className="nav-link" to="/signup">Register Account?</Link></div>
            </div>
        )
    }
}