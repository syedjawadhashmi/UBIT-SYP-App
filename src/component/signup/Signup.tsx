import * as React from "react";
import { Link } from "react-router";
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'


import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

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

class SignupComponent extends React.Component<any, any>{

    constructor() {
        super();
        this.state = {
            cuid: "",
            fname: "",
            lname: "",
            type: "student",
            eml: "",
            contact: "",
            // address: "",
            pwd: ""
        };

        this._onSubmit = this._onSubmit.bind(this);
        this.handlerInput = this.handlerInput.bind(this);

        setTimeout(() => {
            console.log('this.props.authenticUser ', this.props.authenticUser);
        }, 5000)
    }

    handlerInput(e: any) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    _onSubmit(e: any) {
        e.preventDefault();
        console.log(this.state, this.state.cuid.length)
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
            this.props.click(this.state);
        }

    }

    render() {
        return (
            <form style={LoginFormStyle} className='LoginForm'  onSubmit={this._onSubmit}>

                <TextField
                    hintText='First Name'
                    floatingLabelText='First Name'
                    onChange={this.handlerInput}
                    style={fieldStyle}/>
                <TextField
                    hintText='Last Name'
                    floatingLabelText='Last Name'
                    onChange={this.handlerInput}
                    style={fieldStyle}/>

                <TextField
                    hintText='Email'
                    floatingLabelText='Email'
                    onChange={this.handlerInput}
                    style={fieldStyle}
                />
                <TextField
                    hintText='password'
                    floatingLabelText='Password'
                    onChange={this.handlerInput}
                    style={fieldStyle}
                    type='password'
                />
                {/*    <SelectField
                 value={this.state.value}
                 onChange={this.handleChange}
                 floatingLabelText="Floating Label Text"
                 floatingLabelFixed={true}
                 hintText="Hint text"
                 >
                 {items}
                 </SelectField>*/}

                <div className='LoginForm-Submit'>
                    <RaisedButton
                        label='Sign Up'
                        primary
                        type='submit'
                        style={buttonStyle}
                    />
                </div>
            </form>
        )
    }
}

export default SignupComponent;