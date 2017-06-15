import * as React from "react";
import { Link } from 'react-router'
import {browserHistory} from 'react-router';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Navbar from "./../../container/Navbar/Navbar";
// redux/firebase
import { connect } from 'react-redux'
import AuthActions from "./../../store/action/auth";
// Components
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import FlatButton from 'material-ui/FlatButton'
import Avatar from 'material-ui/Avatar'
const buttonStyle = { color: 'white' }
const stockPhotoUrl = 'https://s3.amazonaws.com/kyper-cdn/img/User.png'
const originSettings = { horizontal: 'right', vertical: 'bottom' }
const avatarSize = 50

// Tap Plugin

// for isLoggedin Property from REDUX
function mapStateToProps(state: any) {
    return {
        isAuthenticated: state.AuthReducer['isAuthenticated'],
    };
}

// for call isLoggedin
function mapDispatchToProps(dispatch: any) {
    return {
        isLoggedin: (): void => dispatch(AuthActions.isLoggedin()),
        logout: (): void => dispatch(AuthActions.logout())
    };
}

// note: React.Component<Properties/Props, component-state>
class App extends React.Component<any, any> {

    constructor() {
        super();
        setTimeout(() => {
            this.props.isLoggedin()
        }, 5)
        this.logoutFunc = this.logoutFunc.bind(this);
    }


    _flag = true;
    componentWillReceiveProps() { 
        setTimeout(()=>{
            if(!this.props.isAuthenticated && this._flag && this.props.location.pathname != "/signup") {
                this._flag = false;
                browserHistory.push('/login');
            } else if(this.props.isAuthenticated && !this._flag) {
                this._flag = true;
            }
        }, 5);
    }
    logoutFunc() {
        this.props.logout();
    }

    render() {

        return (
            <div>

                <Navbar/>

                {this.props.children}
            </div>





        )

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)