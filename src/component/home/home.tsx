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

// note: React.Component<Properties/Props, component-state>
export default  class Home extends React.Component<any, any> {

    constructor() {
        super();
    }
    render() {
        const mainMenu = (
            <Card>
                <CardMedia>
                    <img style={{height:"90vh"}} src="http://orig02.deviantart.net/cd1f/f/2014/078/a/1/r_p_d____resident_evil_by_ephebopus365-d3g9rzy.jpg" />
                </CardMedia>
            </Card>
        )
        return (
            <div>
                {mainMenu}
            </div>





        )

    }
}


