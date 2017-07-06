/**
 * Created by S jawwad hashmi on 7/3/2017.
 */
import { Action, createAction } from "redux-actions";

import { store } from '../index';

export default class ReportsActions {


    static GETCRIMES: string = "GETCRIMES";
    static GETCOMPLAINTS: string = "GETCOMPLAINTS";
       static GETMISSING: string = "GETMISSING";
    static GETREPORTS: string = "GETREPORTS";

     static ADDMISSINGS: string = "ADDMISSINGS";
    static ADDCOMPLAINTS: string = "ADDCOMPLAINTS";
    static ADDCRIMES: string = "ADDCRIMES";

    static NULL: string = "NULL";

    constructor() { }

    static getCrimes(payload: Object) {
        store.dispatch({
            type: ReportsActions.GETCRIMES,
            payload
        })
    }

    static getComplaints(payload: Object) {
        store.dispatch({
            type: ReportsActions.GETCOMPLAINTS,
            payload
        })
    }

static getMissings(payload: Object) {
        store.dispatch({
            type: ReportsActions.GETMISSING,
            payload
        })
    }



    static getReports(payload: Object) {
        store.dispatch({
            type: ReportsActions.GETREPORTS,
            payload
        })
    }


  static addCrimes(payload: Object) {
        store.dispatch({
            type: ReportsActions.ADDCRIMES,
            payload
        })
    }

  static addComplaints(payload: Object) {
        store.dispatch({
            type: ReportsActions.ADDCOMPLAINTS,
            payload
        })
    }

  static addMissings(payload: Object) {
        store.dispatch({
            type: ReportsActions.ADDMISSINGS,
            payload
        })
    }




}

