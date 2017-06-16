import * as React from "react";
import { Link } from 'react-router'
//import { authActions } from '../../action/auth';
import {browserHistory} from 'react-router';
// redux/firebase
import { connect } from 'react-redux'

// Components
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import FlatButton from 'material-ui/FlatButton'
import Avatar from 'material-ui/Avatar'
const buttonStyle = { color: 'white' ,    textDecoration: 'none'}
const stockPhotoUrl = 'https://s3.amazonaws.com/kyper-cdn/img/User.png'
const originSettings = { horizontal: 'right', vertical: 'bottom' }
const avatarSize = 50;


class Navbar extends React.Component<any, any> {

    constructor() {
        super();
        this.handleLogOut = this.handleLogOut.bind(this);
    }
    handleLogOut(state: any) {
        this.props.signOut()
        browserHistory.push('/')
    }
    render() {
        const { auth } = this.props;
        const mainMenu = (
            <div className='Navbar-Main-Menu' >
                <FlatButton
                    label='Complaint Reports'
                    style={buttonStyle}
                    onClick={() => browserHistory.push('/')}
                />
                <FlatButton
                    label='Crime Reports'
                    style={buttonStyle}
                    onClick={() => browserHistory.push('/')}
                />

                <FlatButton
                    label='Sign Up'
                    style={buttonStyle}
                    onClick={() => browserHistory.push('/signup')}
                />
                <FlatButton
                    label='Login'
                    style={buttonStyle}
                    onClick={() => browserHistory.push('/login')}
                />
            </div>
        )

        const rightMenu = false ? (

                <div className='Navbar-Main-Menu' >
                    {/*<FlatButton
                     label='Missing Reports'
                     style={buttonStyle}
                     onClick={() => browserHistory.push('/missingreports')}
                     />
                     <FlatButton
                     label='Crime Reports'
                     style={buttonStyle}
                     onClick={() => browserHistory.push('/crimereports')}
                     />
                     <FlatButton
                     label='Complaints'
                     style={buttonStyle}
                     onClick={() => browserHistory.push('/complainreports')}
                     />
                     <FlatButton
                     label='Register Reports'
                     style={buttonStyle}
                     onClick={() => browserHistory.push('/registerreports')}
                     />*/}

                    <FlatButton
                        label='LogOut'
                        style={buttonStyle}
                        onClick={this.handleLogOut}
                    />
                </div>
            ) : mainMenu

        /* return (
         <AppBar
         title={
         <Link to='/' style={buttonStyle}>
         iq
         </Link>
         }
         className='Navbar'
         iconElementRight={mainMenu}
         />
         )*/

        return(
            <div>

                <AppBar title={<Link to='/' style={buttonStyle}>Crime Reports </Link> }className='Navbar' showMenuIconButton={false} iconElementRight={rightMenu} />

            </div>
        )
    }
}

function mapStateToProps(state: any) {
    return {
        //isRegistered: state.AuthReducer['isRegistered'],
       // activeUser: state.AuthReducer['activeUser'],
       // counterReg: state.AuthReducer['counterReg']
        auth: state
    };
}
function mapDispatchToProps(dispatch: any) {
    return {
        signup: (data: Object): void => dispatch()
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);