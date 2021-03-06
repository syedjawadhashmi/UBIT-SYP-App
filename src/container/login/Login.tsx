import * as React from "react";
import { connect } from "react-redux";
import { browserHistory } from 'react-router';
//import { authActions } from '../../action/auth';
import AuthActions from "../../store/action/auth";

// Components
import Paper from 'material-ui/Paper'
import CircularProgress from 'material-ui/CircularProgress'
import Snackbar from 'material-ui/Snackbar'
import RaisedButton from 'material-ui/RaisedButton'

import LoginComponent from '../../component/login/Login';
const buttonStyle = { width: '100%' }
const fieldStyle = { width: '80%' }


interface IRMemberProps extends React.Props<any> {
    login: (obj: Object) => void;
    isAuthenticated: boolean;
    activeUser: any;
}



class Login extends React.Component<IRMemberProps, any> {
    constructor() {
        super();
        this.handleLogin = this.handleLogin.bind(this)
    }

    handleLogin(state: any) {
        // this.props.signInWithCustom(loginData)
        this.props.login(state);
    }

     _flag = true;
    componentWillReceiveProps() {
        setTimeout(() => {
         if (this.props.isAuthenticated && this._flag && this.props.activeUser.type == "reporter") {
         this._flag = false;
         browserHistory.push('/user');
        }else if (this.props.isAuthenticated && this._flag && this.props.activeUser.type == "admin") {
           this._flag = false;
         browserHistory.push('/admin');
         }
         else if (!this.props.isAuthenticated && !this._flag) {
         this._flag = true;
         }
         }, 10);

        //sj       console.log(nextProps)
        /*      const { auth } = this.props;

         if (auth.isLoggedin && !nextProps.auth.auth.isLoggedin) {
         browserHistory.push('/signin')
         }
         else if (!auth.isLoggedin && nextProps.auth.auth.isLoggedin && nextProps.auth.auth.user.role=="user" ) {
         browserHistory.push('/'+nextProps.auth.auth.user.uid);
         }
         else if (!auth.isLoggedin && nextProps.auth.auth.isLoggedin && nextProps.auth.auth.user.role=="admin" ) {
         browserHistory.push('/admin/'+nextProps.auth.auth.user.uid);
         }*/

    }

    render() {
        return (
            <div className='Login' style={{marginLeft: '340px',marginTop: '67px',width: '50%'}}>
                <Paper className='Login-Panel'>
                    <LoginComponent click={this.handleLogin}/>
                    
                </Paper>
            </div>
        )
    }

}

function mapStateToProps(state: any) {
    return {
        isAuthenticated: state.AuthReducer['isAuthenticated'],
          activeUser: state.AuthReducer['activeUser']
    };
}
function mapDispatchToProps(dispatch: any) {
    return {
        login: (data: Object): void => dispatch(AuthActions.login(data))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)