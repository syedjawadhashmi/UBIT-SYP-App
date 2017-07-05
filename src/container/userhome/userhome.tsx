
import * as React from "react";
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router'
import { connect } from 'react-redux';
//import UsersList from '../../components/userList/userList';
interface IHomeProps extends React.Props<any> {
    activeUser: any;
    crimes: any;
    complaints: any;
    reports: any;
};
 class Userhome extends React.Component<IHomeProps, any> {

     showList1(obj?: Object) {
         return (obj) ? Object.keys(obj) : [];
     }
     showList2(users :any) {
         if(!users) {
             return [];
         }
         console.log(users)
         return Object.keys(users).reduce(
             (list, uid) => {
                 return [
                     ...list,
                     {
                         uid,
                         ...users[uid]
                     }
                 ];
             }, []);

     }
    render () {
        return (
        <div>

                <Card style={{margin:'20px'}}>
                        <CardHeader
                            title="View Reports"
                            style={{marginLeft:'20px'}}
                        />


                    {
                        this.showList1(this.props.crimes).map((val, indx) => {
                            return<Card key={indx} style={{margin:'30px',marginBottom:'10px'}}>

                                <CardHeader
                                    title={this.props.crimes[val].reporterName}
                                    subtitle={this.props.crimes[val].role}
                                    avatar={this.props.crimes[val].url2}
                                />
                                <CardText>

                                    {this.props.crimes[val].details}
                                    <br/>
                                    <br/>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                                    Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                                    Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.

                                </CardText>

                            </Card>

                        })
                    }
                    </Card>




        </div>

        )
    }
}


function mapStateToProps(state: any) {
     console.log("main state"+ JSON.stringify(state))
    return {
        activeUser: state.AuthReducer['activeUser'],
        crimes: state.ReportsReducer['crimes'],
        complaints: state.ReportsReducer['complaints'],
        reports: state.ReportsReducer['reports'],
    };
}

export default connect(mapStateToProps,null)(Userhome);