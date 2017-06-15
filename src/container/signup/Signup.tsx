
import * as React from "react";
import { connect } from "react-redux";
import {browserHistory} from 'react-router';
//import { authActions } from '../../action/auth';

// Components
import SignupComponent from '../../component/signup/Signup';
import Paper from 'material-ui/Paper'
import CircularProgress from 'material-ui/CircularProgress'
import Snackbar from 'material-ui/Snackbar'
import RaisedButton from 'material-ui/RaisedButton'


interface IRMemberProps extends React.Props<any> {
    handleSignup: (obj: Object) => void;

}




class Signup extends React.Component<any, any> {

    constructor() {
        super();
        this.handleSignup = this.handleSignup.bind(this);
    }

    handleSignup(state: any) {
        // this.props.registerWithCustom({ email, password, firstName ,lastName})
        browserHistory.push('/signin')
    }



    render() {
        return (
            <div className='Login' style={{marginLeft: '340px',marginTop: '67px',width: '50%'}}>
                <Paper className='Login-Panel'>
                    <SignupComponent click ={this.handleSignup} />
                </Paper>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch: any) {
    return {
        handleSignup: (data: Object): void => dispatch()
    };
}
export default connect(null, mapDispatchToProps)(Signup);