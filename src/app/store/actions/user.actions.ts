import { Action } from '@ngrx/store';
import { User } from '../../models/user.model';

export const GET_USER = '[GET USER] = USER by id';
export const GET_USER_SUCCESS = '[GET USER] = SUCCESS by id';
export const GET_USER_FAIL = '[GET USER] = FAIL by id';


export class GetUser implements Action {
        readonly type =  GET_USER;
        constructor( public id: number) {}
}

export class GetUserFail implements Action {
    readonly type =  GET_USER_FAIL;
    constructor( public payload: any) {}
}

export class GetUserSuccess implements Action {
    readonly type =  GET_USER_SUCCESS;
        constructor( public user: User ) {}
}

export type UserActions = GetUser | GetUserSuccess | GetUserFail;
