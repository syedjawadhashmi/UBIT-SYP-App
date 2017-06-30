
import * as React from "react";
import { connect } from "react-redux";
import {browserHistory} from 'react-router';
//import { authActions } from '../../action/auth';
import AuthActions from "../../store/action/auth";
// Components
import SignupComponent from '../../component/signup/Signup';
import Paper from 'material-ui/Paper'
import CircularProgress from 'material-ui/CircularProgress'
import Snackbar from 'material-ui/Snackbar'
import RaisedButton from 'material-ui/RaisedButton'


interface IRMemberProps extends React.Props<any> {
    signup: (obj: Object) => void;
    isRegistered: boolean;
    activeUser: any;
    counterReg: any
}




class Signup extends React.Component<IRMemberProps, any> {

    constructor() {
        super();
        this.handleSignup = this.handleSignup.bind(this);
    }
    _flag = true;
    componentWillReceiveProps() {
        setTimeout(() => {
            console.log('propsssssss................ ', this.props)
            if (this.props.counterReg > 0 && this.props.activeUser.type == 'admin') {
                browserHistory.push('/home');
            }
            if (this.props.isRegistered && this._flag) {
                this._flag = false;
                browserHistory.push('/login');
            } else if (!this.props.isRegistered && !this._flag) {
                this._flag = true;
            }
        }, 5);
    }
    handleSignup(state: any) {
        this.props.signup(state);

    }



    render() {
        return (
            <div className='Login' style={{marginLeft: '340px',marginTop: '67px',width: '50%'}}>
                <Paper className='Login-Panel'>
                    <SignupComponent click ={this.handleSignup} authenticUser={this.props.activeUser} />
                </Paper>
            </div>
        )
    }
}

function mapStateToProps(state: any) {
    return {
        isRegistered: state.AuthReducer['isRegistered'],
        activeUser: state.AuthReducer['activeUser'],
        counterReg: state.AuthReducer['counterReg']
    };
}

function mapDispatchToProps(dispatch: any) {
    return {
        signup: (data: Object): void => dispatch(AuthActions.signup(data))
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Signup);