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
                if (payload && (payload.type == 'reporter')) {
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
                if (payload && (payload.type == 'reporter')) {
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


    static getMissings = (action$: ActionsObservable<any>) =>
        action$.ofType(AuthActions.LOGIN_SUCCESS)
            .switchMap(({payload}) => {
                // console.log('StudentEpics LOGINSUCCESS ', payload)
                if (payload && (payload.type == 'reporter')) {
                    ReportsEpic.mainRef.child('missings').on('child_added', (snapshot) => {
                        // console.log('child_added: ', snapshot.key, snapshot.val());

                            let obj = Object.assign({}, snapshot.val());
                            obj['$key'] = snapshot.key
                            StudentActions.getMissings(obj);

                    })
                }
                return Observable.of({
                    type: StudentActions.NULL
                })
            })
        static getUserReports = (action$: ActionsObservable<any>) =>
        action$.ofType(AuthActions.LOGIN_SUCCESS)
            .switchMap(({payload}) => {
                // console.log('StudentEpics LOGINSUCCESS ', payload)
                if (payload && (payload.type == 'reporter')) {
                    ReportsEpic.mainRef.child(`userReports/${payload.userId}`).on('child_added', (snapshot) => {
                        // console.log('child_added: ', snapshot.key, snapshot.val());

                            let obj = Object.assign({}, snapshot.val());
                            obj['$key'] = snapshot.key
                            StudentActions.getUserReports(obj);

                    })
                }
                return Observable.of({
                    type: StudentActions.NULL
                })
            })
      static getUsers = (action$: ActionsObservable<any>) =>
        action$.ofType(AuthActions.LOGIN_SUCCESS)
            .switchMap(({payload}) => {
                // console.log('StudentEpics LOGINSUCCESS ', payload)
                if (payload && (payload.type == 'admin')) {
                    ReportsEpic.mainRef.child(`users`).on('child_added', (snapshot) => {
                        // console.log('child_added: ', snapshot.key, snapshot.val());

                            let obj = Object.assign({}, snapshot.val());
                            obj['$key'] = snapshot.key
                            StudentActions.getUsers(obj);

                    })
                }
                return Observable.of({
                    type: StudentActions.NULL
                })
            })

    static getAllReports = (action$: ActionsObservable<any>) =>
        action$.ofType(AuthActions.LOGIN_SUCCESS)
            .switchMap(({payload}) => {
                if (payload && (payload.type == 'admin')) {
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



    
    
    static addReports = (action$: ActionsObservable<any>) =>
        action$.ofType(StudentActions.ADDCRIMES)
            .switchMap(({payload}) => {


                 console.log('add reports ', payload)
                payload['dated'] = firebase.database.ServerValue.TIMESTAMP;
                if (payload && (payload.role == 'Crime')) {

                let Objkey = ReportsEpic.mainRef.child(`reports`).push(payload)
                let objkey2 =  ReportsEpic.mainRef.child(`crimes/ ${Objkey.key}`).set(payload)
                console.log('Objkey ------------ ', Objkey);
                return Observable.fromPromise(ReportsEpic.mainRef.child(`userReports/${payload.userId}/${Objkey.key}`)
                    .set(payload))
                    .map((data) => {
                        console.log('add Crimes Data', data)
                        return {
                            type: StudentActions.NULL
                        }
                    })

                   
                } else if (payload && payload.role == 'Missing') {
                        let Objkey = ReportsEpic.mainRef.child(`reports`).push(payload)
                let objkey2 =  ReportsEpic.mainRef.child(`missings/ ${Objkey.key}`).set(payload)
                console.log('Objkey ------------ ', Objkey);
                return Observable.fromPromise(ReportsEpic.mainRef.child(`userReports/${payload.userId}/${Objkey.key}`)
                    .set(payload))
                    .map((data) => {
                        console.log('add Missing Data', data)
                        return {
                            type: StudentActions.NULL
                        }
                    })


                }else if (payload && payload.role == 'Complaints') {
                    
                        let Objkey = ReportsEpic.mainRef.child(`reports`).push(payload)
                let objkey2 =  ReportsEpic.mainRef.child(`complaints/ ${Objkey.key}`).set(payload)
                console.log('Objkey ------------ ', Objkey);
                return Observable.fromPromise(ReportsEpic.mainRef.child(`userReports/${payload.userId}/${Objkey.key}`)
                    .set(payload))
                    .map((data) => {
                        console.log('add ComplaintsZZZZz Data', data)
                        return {
                            type: StudentActions.NULL
                        }
                    })

                }


        //    return Observable.of({
        //             type: StudentActions.NULL
        //         })

        //         .map((result) => {
        //   return {
        //     payload: result,
        //     type: types.loginCompleted,
        //   };
        // })
        // .catch((error) => {
        //   return Observable.of({
        //     payload: error,
        //     type: types.loginFailed,
        //   });
        // });


            })

static deleteReport = (action$: ActionsObservable<any>) =>
        action$.ofType(StudentActions.DELETEREPORTS)
            .switchMap(({payload}) => {
                 if (payload && (payload.role == 'Crime')) {

                 ReportsEpic.mainRef.child(`reports/${payload.$key}`).set({})
                 ReportsEpic.mainRef.child(`crimes/ ${payload.$key}`).set({})
                return Observable.fromPromise(ReportsEpic.mainRef.child(`userReports/${payload.userId}/${payload.$key}`)
                    .set({}))
                     .map((data) => {
                        console.log('removed Crime data', data)
                        return {
                            type: StudentActions.NULL
                        }
                    })

                   
                } else if (payload && (payload.role == 'Complaints')) {

                 ReportsEpic.mainRef.child(`reports/${payload.$key}`).set({})
                 ReportsEpic.mainRef.child(`complaints/ ${payload.$key}`).set({})
                return Observable.fromPromise(ReportsEpic.mainRef.child(`userReports/${payload.userId}/${payload.$key}`)
                    .set({}))
                     .map((data) => {
                        console.log('removed Complaints data', data)
                        return {
                            type: StudentActions.NULL
                        }
                    })
                }else if (payload && (payload.role == 'Missing')) {

                 ReportsEpic.mainRef.child(`reports/${payload.$key}`).set({})
                 ReportsEpic.mainRef.child(`missings/ ${payload.$key}`).set({})
                return Observable.fromPromise(ReportsEpic.mainRef.child(`userReports/${payload.userId}/${payload.$key}`)
                    .set({}))
                     .map((data) => {
                        console.log('removed Missing data', data)
                        return {
                            type: StudentActions.NULL
                        }
                    })
                }
            })


 

}