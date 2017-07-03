/**
 * Created by S jawwad hashmi on 7/3/2017.
 */
import { Action, createAction } from "redux-actions";

import { store } from '../index';

export default class ReportsActions {


    static GETCRIMES: string = "GETCRIMES";
    static GETCOMPLAINTS: string = "GETCOMPLAINTS";
    static GETREPORTS: string = "GETREPORTS";
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



    static getReports(payload: Object) {
        store.dispatch({
            type: ReportsActions.GETREPORTS,
            payload
        })
    }




}

