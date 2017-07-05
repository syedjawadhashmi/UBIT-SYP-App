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
import {List, ListItem} from 'material-ui/List'
import ActionGrade from 'material-ui/svg-icons/action/grade'
import ContentInbox from 'material-ui/svg-icons/content/inbox'
import ContentDrafts from 'material-ui/svg-icons/content/drafts'
import ContentSend from 'material-ui/svg-icons/content/send'
import Subheader from 'material-ui/Subheader'
import Toggle from 'material-ui/Toggle'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

import Avatar from 'material-ui/Avatar'
const buttonStyle = { color: 'white' ,    textDecoration: 'none'}
const stockPhotoUrl = 'https://s3.amazonaws.com/kyper-cdn/img/User.png'
const originSettings = { horizontal: 'right', vertical: 'bottom' }
const avatarSize = 50;

interface INavProps extends React.Props<any> {
    activeUser: any;
    crimes: any;
    complaints: any;
    reports: any;
    isAuthenticated: boolean;
};
class Navbar extends React.Component<INavProps, any> {

    constructor() {
        super();
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
    padding-right: 20px !important;
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

        const sideMenu =  (this.props.isAuthenticated && this.state.open) ? (
            <Drawer
            docked={true}
            open={this.state.open}
            onRequestChange={(open) => this.setState({open})}
        >
            <List>
                <Subheader>Nested List Items</Subheader>
                <ListItem primaryText="Sent mail" leftIcon={<ContentSend />} />
                <ListItem primaryText="Drafts" leftIcon={<ContentDrafts />} />
                <ListItem
                    primaryText="Inbox"
                    leftIcon={<ContentInbox />}
                    initiallyOpen={true}
                    primaryTogglesNestedList={true}
                    nestedItems={[
                <ListItem
                  key={1}
                  primaryText="Starred"
                  leftIcon={<ActionGrade />}
                />,
                <ListItem
                  key={2}
                  primaryText="Sent Mail"
                  leftIcon={<ContentSend />}
                  disabled={true}
                  nestedItems={[
                    <ListItem key={1} primaryText="Drafts" leftIcon={<ContentDrafts />} />,
                  ]}
                />,
                <ListItem
                  key={3}
                  primaryText="Inbox"
                  leftIcon={<ContentInbox />}
                  open={this.state.open}
                  nestedItems={[
                    <ListItem key={1} primaryText="Drafts" leftIcon={<ContentDrafts />} />,
                  ]}
                />,
              ]}
                />
            </List>
        </Drawer>

        ) : ''
        return(
            <div>

                {/*<AppBar title={<Link to='/' style={buttonStyle}>Crime Reports </Link> }className='Navbar' showMenuIconButton={false} iconElementRight={rightMenu} />*/}
                <div>
                    <style>
                        {css}
                    </style>

                    <AppBar
                        className={`app-bar  ${(this.state.open && this.props.isAuthenticated ? ' expanded' : '')}` }
                        title={<Link to='/' style={buttonStyle}>Crime Reports</Link>}
                        showMenuIconButton={this.props.isAuthenticated}
                        onLeftIconButtonTouchTap={this.handleToggle}
                        iconElementRight={rightMenu}

                    />
                    {sideMenu}
                    {/*{ this.props.isAuthenticated && <div className={`app-content  ${(this.state.open && this.props.isAuthenticated ? ' expanded' : '')}` }> { this.props.children } </div>}*/}
                </div>

            </div>
        )
    }
}

function mapStateToProps(state: any) {
    console.log("main state"+ JSON.stringify(state))
    return {
        isAuthenticated: state.AuthReducer['isAuthenticated'],
        activeUser: state.AuthReducer['activeUser'],
        crimes: state.ReportsReducer['crimes'],
        complaints: state.ReportsReducer['complaints'],
        reports: state.ReportsReducer['reports'],
    };
}
export default connect(mapStateToProps, null)(Navbar);