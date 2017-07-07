import reporsAction from "./../action/reports";

const INITIAL_STATE = {
    isError: { status: false, msg: '' },
    isProcessing: false,
    crimes: {},
    complaints: {},
    missings: {},
    reports: {},
    userReports: {},
    users: {}
}

interface IACTION {
    type: string,
    payload?: any
}


function ReportsReducer(state = INITIAL_STATE, action: IACTION) {
    let newObj: any = null;
    switch (action.type) {

        case reporsAction.GETCOMPLAINTS:
            newObj = Object.assign({}, state.complaints);
            newObj[action.payload['$key']] = action.payload;
            // console.log('Complaints---------------------------', Object.assign({}, state, { complaints: newObj }))
            return Object.assign({}, state, { complaints: newObj });

        case reporsAction.GETCRIMES:
            newObj = Object.assign({}, state.crimes);
            newObj[action.payload['$key']] = action.payload;
            //console.log('Crimes---------------------------', Object.assign({}, state, { crimes: newObj }))
            return Object.assign({}, state, { crimes: newObj });
             
        case reporsAction.GETMISSING:
            newObj = Object.assign({}, state.missings);
            newObj[action.payload['$key']] = action.payload;
            //console.log('Missing---------------------------', Object.assign({}, state, { missings: newObj }))
            return Object.assign({}, state, { missings: newObj });

        case reporsAction.GETREPORTS:
          //  console.log('ALL REPORTS-----', action.payload);
            newObj = Object.assign({}, state.reports);
            newObj[action.payload['$key']] = action.payload;
            return Object.assign({}, state, { reports: newObj });

   case reporsAction.GETUSERREPORTS:
            console.log('uSER REPORTS-----', action.payload);
            newObj = Object.assign({}, state.userReports);
            newObj[action.payload['$key']] = action.payload;
            return Object.assign({}, state, { userReports: newObj });

               case reporsAction.GETUSERS:
            console.log('uSER REPORTS-----', action.payload);
            newObj = Object.assign({}, state.users);
            newObj[action.payload['$key']] = action.payload;
            return Object.assign({}, state, { users: newObj });
        default:
            return state;

    }
}

export default ReportsReducer;