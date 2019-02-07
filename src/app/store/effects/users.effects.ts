import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromUsersActions from '../actions';
import { map, switchMap, catchError } from 'rxjs/operators';
import { UserService } from '../../services/user.service';
import { GetUsersSuccess, GetUsersFail } from '../actions/users.actions';
import { of } from 'rxjs';



@Injectable()
export class UsersEffects {

    @Effect() getUsers$ = this.actions$
    .pipe(
        ofType(fromUsersActions.GET_USERS),
        switchMap ( () =>  this.userService.getUsers()
        .pipe(
            map(users => new GetUsersSuccess( users )),
            catchError( error => of(new GetUsersFail(error)))
        )
         )
    );

    constructor( private actions$: Actions, private userService: UserService ) {}

}
