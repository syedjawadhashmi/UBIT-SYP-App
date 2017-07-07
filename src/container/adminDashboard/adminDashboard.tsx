
import * as React from "react";
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router'
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import ContentInbox from 'material-ui/svg-icons/action/search'
//import UsersList from '../../components/userList/userList';
import ReportActions from '../../store/action/reports';
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';
import RaisedButton from 'material-ui/RaisedButton';
const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
    textAlign:"center"
  },
   tab: {
        padding: '2px 34px',
        width: '140px',
        height: '72px',
        color: '#4b4b4b'
    },
};
interface IHomeProps extends React.Props<any> {
    activeUser: any;
    reports: any;
     deleteReports: (data: Object) => void;
};
 class Adminhome extends React.Component<IHomeProps, any> {
    constructor(){
        super();
        this.approved = this.approved.bind(this)
        this.rejected = this.rejected.bind(this)
    }
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
     approved(obj: Object){
            console.log("kakay",obj)
            
     }
      rejected(obj: Object){
            console.log("kakay",obj)
            this.props.deleteReports(obj)
     }
    render () {


        return (
        <div>

 <Tabs  inkBarStyle={{backgroundColor:"none", color:'none'}}>
    <Tab style={{backgroundColor:"white"}}  label="Admin Panel" >
      <div>
        <h2 style={styles.headline}>Welcome user to Admin Panel</h2>
   
                <Card style={{margin:'20px',paddingBottom:'20px'}}>
                        <CardHeader
                            title="All Users Reports"
                            style={{marginLeft:'20px'}}
                        />

  {/*<div style={{position: 'relative', display: 'inline-block'}}>

       <TextField
              style={{textIndent: 30}}
              hintText="Search by Name"
              
        />
               <ContentInbox style={{position: 'absolute', right: 0, top: 15, width: 20, height: 20}}/>
</div>*/}
                    {
                        this.showList1(this.props.reports).map((val, indx) => {
                            return<Card key={indx} style={{margin:'30px',marginBottom:'10px'}}>

                                <CardHeader
                                    title={this.props.reports[val].reporterName}
                                    subtitle={this.props.reports[val].role}
                                    avatar={this.props.reports[val].url2}
                                />
                                <CardText>

                                    {this.props.reports[val].details}
                                    <br/>
                                    <br/>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                                    Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                                    Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.

                                </CardText>
                                             <CardActions>
                                     <RaisedButton label="Approve" primary={true} onClick={()=>this.approved(this.props.reports[val])} />
                                     <RaisedButton label="Reject" secondary={true} onClick={()=>this.rejected(this.props.reports[val])} />
                                            </CardActions>

                            </Card>

                        })
                    }
                    </Card>

      </div>
    </Tab>
  </Tabs>


        </div>

        )
    }
}

function mapDispatchToProps(dispatch: any) {
    return {
        deleteReports: (data: Object): void => dispatch(ReportActions.deleteReports(data))
    };
}
function mapStateToProps(state: any) {
     console.log("main state"+ JSON.stringify(state))
    return {
        activeUser: state.AuthReducer['activeUser'],
        reports: state.ReportsReducer['reports'],
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(Adminhome);