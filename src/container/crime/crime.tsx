
import * as React from "react";
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router'
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton'
//import UsersList from '../../components/userList/userList';
interface IHomeProps extends React.Props<any> {
    activeUser: any;
    crimes: any;
    complaints: any;
    reports: any;
};
class Crime extends React.Component<IHomeProps, any> {

    showList1(obj?: Object) {
        console.log('obj :: ',obj);
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
        let crimeArray = this.showList1(this.props.crimes).map((val, indx) => {
            return<Card key={indx} style={{width: '300px', marginLeft: '5px', marginRight: '30px'}}>


                <CardMedia>
                    <img src={this.props.crimes[val].url2} style={{}}/>
                </CardMedia>
                <CardTitle style={{textDecoration:'none'}} title={this.props.crimes[val].role}/>

            </Card>
        })
      /*  const mainMenu = (

            <RaisedButton
                label='Thin Case is on pending'
                secondary={true}
                fullWidth={true}

            />

        )

        const rightMenu = true ? (


                <RaisedButton
                    label='Case Approve'
                    primary={true}
                />

            ) : mainMenu*/
        return (
            <div>
                {
                    <div style={{display: 'inline-flex', margin: '20px'}}>
                        {crimeArray}
                    </div>

                }


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

export default connect(mapStateToProps,null)(Crime);