import * as fromUserActions from '../actions';
import { User } from 'src/app/models/user.model';



export interface UsersState {
        users: User[];
        loading: boolean;
        loaded: boolean;
        error: any;
}

const initState: UsersState = {
        users: [],
        loading: false,
        loaded: false,
        error: null,
}

export function UsersReducer (state = initState, actions: fromUserActions.UsersActions  ): UsersState {

switch (actions.type) {
    case fromUserActions.GET_USERS:

    return  {
        ...state,
            loading: true,
            error: null
    };

    case fromUserActions.GET_USERS_SUCCESS:
    return  {
        ...state,
            loading: false,
            loaded: true,
            users: [...actions.users]

        };

    case fromUserActions.GET_USERS_FAIL:
    return  {
        ...state,
            loading: false,
            loaded: false,
            error: {
                status: actions.payload.status,
                message: actions.payload.message,
                url: actions.payload.url
            }
        };

        default:
    return state;
}

}