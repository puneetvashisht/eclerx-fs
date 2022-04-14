import {Action} from '@ngrx/store'

export enum ActionTypes {
    Add = 'Add Todo',
    Done = 'Done Todo',
    Delete = 'Delete Todo',
}

export class Add implements Action{
    readonly type =  ActionTypes.Add
    constructor(public payload: string){}
}
export class Done implements Action{
    readonly type =  ActionTypes.Done
    constructor(public payload: number){}
}
export class Delete implements Action{
    readonly type =  ActionTypes.Delete
    constructor(public payload: number){}
}

export type ActionsUnion = Add | Done | Delete;