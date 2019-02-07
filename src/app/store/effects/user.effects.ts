import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromUserActions from '../actions';
import { map, switchMap, catchError } from 'rxjs/operators';
import { UserService } from '../../services/user.service';
import { of } from 'rxjs';
import { User } from '../../models/user.model';



@Injectable()
export class UserEffects {

    @Effect() getUsers$ = this.actions$
    .pipe(
            ofType(fromUserActions.GET_USER),
            switchMap ( (accion: any) => {

                return this.userService.getUser(accion.id)
            .pipe(
                map((user: User) => {
                return new fromUserActions.GetUserSuccess( user );
                }),
                catchError( error => of(new fromUserActions.GetUserFail(error)))
            );
            })
         );

    constructor( private actions$: Actions, private userService: UserService ) {}

}
