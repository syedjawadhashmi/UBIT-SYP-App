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
    _onSubmit(e: any) {
        e.preventDefault();
       /* console.log(this.state, this.state.cuid.length)
        if (this.state.cuid.length <= 4) {
            alert('Pls User Id, max length 4')
        } else if (this.state.fname.length <= 3) {
            alert('Pls First Name')
        } else if (this.state.lname.length <= 3) {
            alert('Pls Last Name')
        } else if (this.state.eml.length <= 5) {
            alert('Pls Email Id')
        } else if (this.state.contact.length <= 7) {
            alert('Pls Contact, mix length 7')
        } else if (this.state.pwd.length <= 5) {
            alert('Pls Pwd, max length should be 5')
        } else {
            //this.props.click(this.state);
            //onLogin({ email, password })
        }*/

    }

    render() {
        return (
            <form style={LoginFormStyle} className='LoginForm'  onSubmit={this._onSubmit}>
                <TextField
                    floatingLabelText='Email'
                    name="email"
                    style={fieldStyle}
                />


                <TextField
                    floatingLabelText='Password'
                    name='password'
                    type='password'
                    style={fieldStyle}
                />


                <div className='LoginForm-Submit'>
                    <RaisedButton
                        label='Login'
                        primary
                        type='submit'
                        style={buttonStyle}
                    />

                </div>
            </form>
        )
    }
}