// https://redux-observable.js.org/docs/basics/SettingUpTheMiddleware.html

import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';


// Application State IAppState
import IAppState from './IAppState';

// reducers
import AuthReducer from "./reducer/auth";
import StudentReducer from "./reducer/student";
import ReportsReducer from "./reducer/reports";

// epics
import AuthEpic from "./epic/auth";
import StudentEpic from "./epic/student";
import ReportsEpic from "./epic/reports";


// Application Epics / Effects
export const rootEpic = combineEpics(
    AuthEpic.signupEpic,
    AuthEpic.createrMemberEpic,
    AuthEpic.loginEpic,
    AuthEpic.isLoggedInEpic,
    AuthEpic.LogoutEpic,
    StudentEpic.getVacancies,
    StudentEpic.getCompanies,
    StudentEpic.applyVacantEpic,
    StudentEpic.onVacancyEventChangesEpics,
    StudentEpic.addVacancyEpics,
    StudentEpic.updateVacancyEpics,
    StudentEpic.deleteVacancyEpics,
    StudentEpic.onVacancyEventDeleteEpics,
    ReportsEpic.getAllReports,
    ReportsEpic.getComplaints,
    ReportsEpic.getCrimes,
       ReportsEpic.getMissings,
       ReportsEpic.getUserReports,
       ReportsEpic.getUsers,
       ReportsEpic.addReports,
       ReportsEpic.deleteReport

);

// Application Reducers
export const rootReducer = combineReducers<IAppState>({
    AuthReducer,
    StudentReducer,
    ReportsReducer
});




// for initialize in application 


const epicMiddleware = createEpicMiddleware(rootEpic);

const createStoreWithMiddleware = applyMiddleware(epicMiddleware)(createStore);

export let store = createStoreWithMiddleware(rootReducer);