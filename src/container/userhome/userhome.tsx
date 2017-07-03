
import * as React from "react";
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router'
import { connect } from 'react-redux';
//import UsersList from '../../components/userList/userList';

 class Userhome extends React.Component<any, any> {


    render () {
        return (
        // <div>
        //     {
        //         !this.props.children ? <Card style={{margin:'20px'}}>
        //                 <CardHeader
        //                     title="View Reports"
        //                     style={{marginLeft:'20px'}}
        //                 />
        //
        //                 {
        //
        //                     this.props.missings.isloaded ? this.showUsersList(this.props.missings.missingData).map(user =>
        //
        //                             <Card style={{margin:'30px',marginBottom:'10px'}}>
        //                                 <CardHeader
        //                                     title={user.name}
        //                                     subtitle={user.role}
        //                                     avatar={user.url}
        //                                 />
        //                                 <CardText>
        //
        //                                     {user.details}
        //                                     <br/>
        //                                     <br/>
        //                                     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        //                                     Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
        //                                     Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
        //                                     Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
        //
        //                                 </CardText>
        //
        //
        //                                 {/*<CardMedia
        //                                  overlay={<CardTitle title={user.name} subtitle="Overlay subtitle"/>}
        //                                  >
        //                                  <img src={user.url} style={{height:'200px'}}/>
        //                                  </CardMedia>
        //                                  <CardTitle style={{textDecoration:'none'}} title={
        //                                  <Link  style={{textDecoration:'none'}} to={`/${this.props.params.userid}/missings/${user.uid}` }>
        //                                  {user.name}
        //                                  </Link>
        //                                  } subtitle="Card subtitle"/>
        //                                  <CardText>
        //                                  {user.name}
        //                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        //                                  Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
        //                                  </CardText>*/}
        //                             </Card>
        //                         ) : ''
        //
        //
        //
        //                 }
        //             </Card> :<div>{this.props.children}</div>
        //
        //     }
        //
        //
        // </div>
            <div>
              <h1>welcome crime report</h1>
            </div>
        )
    }
}


/*const mapStateToProps = (state) => {
    console.log("users page "+state)
    return {

        auth: state.auth ,
        missings: state.missingData
    };
};*/

export default connect(null,null)(Userhome);