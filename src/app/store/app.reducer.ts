import { ActionReducerMap } from '@ngrx/store';
import * as fromUserReducer from './reducers';


export interface AppState {
    users: fromUserReducer.UsersState;
    user:  fromUserReducer.UserState;
}

export const appReducer: ActionReducerMap<AppState> = {
    users: fromUserReducer.UsersReducer,
    user: fromUserReducer.UserReducer
};
