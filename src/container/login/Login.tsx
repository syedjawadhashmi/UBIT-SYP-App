import * as React from "react";
import { connect } from "react-redux";
import { browserHistory } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import style from './signinform.scss';
const buttonStyle = { width: '100%' }
const fieldStyle = { width: '80%' }


interface IRMemberProps extends React.Props<any> {
    login: (obj: Object) => void;
    isAuthenticated: boolean;
}

function mapStateToProps(state: any) {
    return {
        isAuthenticated: state.AuthReducer['isAuthenticated'],
    };
}
function mapDispatchToProps(dispatch: any) {
    return {
        login: (data: Object): void => dispatch(AuthActions.login(data))
    };
}


class Login extends React.Component<IRMemberProps, any> {
    constructor() {
        super();
        this.onLoginClick = this.onLoginClick.bind(this)
    }

    onLoginClick(state: any) {
        this.props.login(state);
    }

    _flag = true;
    componentWillReceiveProps() {
        setTimeout(() => {
            if (this.props.isAuthenticated && this._flag) {
                this._flag = false;
                browserHistory.push('/home');
            } else if (!this.props.isAuthenticated && !this._flag) {
                this._flag = true;
            }
        }, 10);
    }

    render() {
        <form style={{padding: '16px',margin:'0px'}} className='LoginForm' onSubmit={handleSubmit}>
            <TextField
                floatingLabelText='Email'
                name="email"
                onChange={({ target }) => { this.setState({email: target.value}) }}
                errorText={errors.email}
                style={fieldStyle}
            />


            <TextField
                floatingLabelText='Password'
                name='password'
                type='password'
                errorText={errors.password}
                onChange={({ target }) => { this.setState({password: target.value}) }}
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
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(Login)