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
import {List, ListItem} from 'material-ui/List'
import ActionGrade from 'material-ui/svg-icons/action/fingerprint'
import Feedback from 'material-ui/svg-icons/action/feedback'
import ContentInbox from 'material-ui/svg-icons/action/accessibility'
import ContentDrafts from 'material-ui/svg-icons/action/home'
import ContentSend from 'material-ui/svg-icons/action/view-quilt'
import Subheader from 'material-ui/Subheader'
import Toggle from 'material-ui/Toggle'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
const buttonStyle = { color: 'white' ,    textDecoration: 'none'}
const stockPhotoUrl = 'https://s3.amazonaws.com/kyper-cdn/img/User.png'
const originSettings = { horizontal: 'right', vertical: 'bottom' }
const avatarSize = 50;
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
        this.handleLogOut = this.handleLogOut.bind(this);
        this.state = {open: false}
        this.handleToggle = this.handleToggle.bind(this)
        this.handleClose = this.handleClose.bind(this)
    }
    handleToggle() {
        this.setState({open: !this.state.open})
    }

    handleClose() {
        this.setState({open: true})
    }
    handleLogOut(state: any) {
    // this.props.signOut()
    browserHistory.push('/')
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
        const css = `
      .app-bar{
    -moz-transition: left 218ms cubic-bezier(0.4, 0, 0.2, 1);
    -o-transition: left 218ms cubic-bezier(0.4, 0, 0.2, 1);
    -webkit-transition: left 218ms cubic-bezier(0.4, 0, 0.2, 1);
    transition: left 218ms cubic-bezier(0.4, 0, 0.2, 1);
    left: 0;
    width: auto !important;
    right: 0 !important;
    position: fixed !important;
}

.app-content{
    -moz-transition: padding-left 218ms cubic-bezier(0.4, 0, 0.2, 1);
    -o-transition: padding-left 218ms cubic-bezier(0.4, 0, 0.2, 1);
    -webkit-transition: padding-left 218ms cubic-bezier(0.4, 0, 0.2, 1);
    transition: padding-left 218ms cubic-bezier(0.4, 0, 0.2, 1);
    padding-top: 64px !important;
}

.app-bar.expanded{
    left: 255px;
}

.app-content.expanded{
    padding-left: 255px;
}
.app-root{
    -moz-transition: left 218ms cubic-bezier(0.4, 0, 0.2, 1);
    -o-transition: left 218ms cubic-bezier(0.4, 0, 0.2, 1);
    -webkit-transition: left 218ms cubic-bezier(0.4, 0, 0.2, 1);
    transition: left 218ms cubic-bezier(0.4, 0, 0.2, 1);
    left: 0;
    width: auto !important;
    right: 0 !important;
    position: fixed !important;
}

.app-root.expanded{
    left: 255px;
}
        `
        const mainMenu = (
            <div className='Navbar-Main-Menu' >
                {/*<FlatButton*/}
                    {/*label='Complaint Reports'*/}
                    {/*style={buttonStyle}*/}
                    {/*onClick={() => browserHistory.push('/')}*/}
                {/*/>*/}
                {/*<FlatButton*/}
                    {/*label='Crime Reports'*/}
                    {/*style={buttonStyle}*/}
                    {/*onClick={() => browserHistory.push('/')}*/}
                {/*/>*/}

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
        const rightMenu = this.props.isAuthenticated ? (
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
                        onClick={this.logoutFunc}
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

        const sideMenu =  (this.props.isAuthenticated && this.state.open) ? (
                <Drawer
                    docked={true}
                    open={this.state.open}
                    onRequestChange={(open) => this.setState({open})}
                >
                    <List>
                        <Subheader>Nested List Items</Subheader>
                        <ListItem primaryText="Home" onClick={() => browserHistory.push('/home')}  leftIcon={<ContentDrafts />}  />
                        <ListItem primaryText="Crimes"     onClick={() => browserHistory.push('/crimes')}leftIcon={<ContentSend />} />
                        <ListItem primaryText="Complaints" leftIcon={<ContentInbox />} />
                        <ListItem primaryText="All Reports" leftIcon={<ActionGrade />} />
                        <ListItem primaryText="Add Reports" leftIcon={<Feedback />} />

                    </List>
                </Drawer>

            ) : ''
        return (
            <div>

                <style>
                    {css}
                </style>

                <AppBar
                    className={`app-bar  ${(this.state.open && this.props.isAuthenticated ? ' expanded' : '')}` }
                    title="Crime Reports"
                    showMenuIconButton={this.props.isAuthenticated }
                    onLeftIconButtonTouchTap={this.handleToggle}
                    iconElementRight={rightMenu}

                />
                {sideMenu}
              {  <div className={`app-content  ${(this.state.open ? ' expanded' : '')}` }> { this.props.children } </div>}
               {/* {this.props.children}*/}
            </div>





        )

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)