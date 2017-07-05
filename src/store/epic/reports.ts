/**
 * Created by S jawwad hashmi on 7/3/2017.
 */
import { Observable } from "rxjs";
import { ActionsObservable } from "redux-observable";
import { browserHistory } from 'react-router'; // http://stackoverflow.com/questions/31079081/programmatically-navigate-using-react-router

import AuthActions from "./../action/auth";
import StudentActions from "./../action/reports";

import { FirebaseServie } from '../../service/firebaseService';
import * as firebase from 'firebase';

export default class ReportsEpic {
    static mainRef = FirebaseServie.mainRef;

    static getCrimes= (action$: ActionsObservable<any>) =>
        action$.ofType(AuthActions.LOGIN_SUCCESS)
            .switchMap(({payload}) => {
                // console.log('StudentEpics LOGINSUCCESS ', payload)
                if (payload && (payload.type == 'reporter' || payload.type == 'admin')) {
                    ReportsEpic.mainRef.child('crimes').on('child_added', (snapshot) => {
                        // console.log('child_added: ', snapshot.key, snapshot.val());
                        let obj = Object.assign({}, snapshot.val());
                        obj['$key'] = snapshot.key
                        StudentActions.getCrimes(obj);
                    })

                }
                return Observable.of({
                    type: StudentActions.NULL
                })
            })

    static getComplaints = (action$: ActionsObservable<any>) =>
        action$.ofType(AuthActions.LOGIN_SUCCESS)
            .switchMap(({payload}) => {
                // console.log('StudentEpics LOGINSUCCESS ', payload)
                if (payload && (payload.type == 'reporter' || payload.type == 'admin')) {
                    ReportsEpic.mainRef.child('complaints').on('child_added', (snapshot) => {
                        // console.log('child_added: ', snapshot.key, snapshot.val());

                            let obj = Object.assign({}, snapshot.val());
                            obj['$key'] = snapshot.key
                            StudentActions.getComplaints(obj);

                    })
                }
                return Observable.of({
                    type: StudentActions.NULL
                })
            })


    static getAllReports = (action$: ActionsObservable<any>) =>
        action$.ofType(AuthActions.LOGIN_SUCCESS)
            .switchMap(({payload}) => {
                if (payload && (payload.type == 'reporter' || payload.type == 'admin')) {
                    ReportsEpic.mainRef.child('reports').on('child_added', (snapshot) => {
                        // console.log('child_added: ', snapshot.key, snapshot.val());

                            let obj = Object.assign({}, snapshot.val());
                            obj['$key'] = snapshot.key
                            StudentActions.getReports(obj);

                    })
                }

                return Observable.of({
                    type: StudentActions.NULL
                })
            })




}