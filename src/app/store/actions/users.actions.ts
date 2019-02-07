import { Action } from '@ngrx/store';
import { User } from '../../models/user.model';

export const GET_USERS = '[GET USER] = USERS list';
export const GET_USERS_SUCCESS = '[GET USER] = SUCCESS ';
export const GET_USERS_FAIL = '[GET USER] = FAIL ';


export class GetUsers implements Action {
        readonly type =  GET_USERS;
}

export class GetUsersFail implements Action {
    readonly type =  GET_USERS_FAIL;
    constructor( public payload: any) {}
}

export class GetUsersSuccess implements Action {
    readonly type =  GET_USERS_SUCCESS;
        constructor( public users: User[] ) {}
}

export type UsersActions = GetUsers | GetUsersSuccess | GetUsersFail;
