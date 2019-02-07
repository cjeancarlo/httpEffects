import * as fromUserActions from '../actions';
import { User } from 'src/app/models/user.model';

export interface UserState {
        user: User;
        loading: boolean;
        loaded: boolean;
        error: any;
}

const initState: UserState = {
        user: null,
        loading: false,
        loaded: false,
        error: null,
};

export function UserReducer (state = initState, actions: fromUserActions.UserActions  ): UserState {

    switch (actions.type) {
    case fromUserActions.GET_USER:

    return  {
        ...state,
            loading: true,
            error: null
    };

    case fromUserActions.GET_USER_SUCCESS:
    return  {
        ...state,
            loading: false,
            loaded: true,
            user: { ...actions.user }

        };

    case fromUserActions.GET_USER_FAIL:
    return  {
            loading: false,
            loaded: false,
            user: null,
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
