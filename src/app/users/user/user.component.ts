import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducer';
import {  ActivatedRoute } from '@angular/router';
import { GetUser } from '../../store/actions/user.actions';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: []
})
export class UserComponent implements OnInit {

  constructor( private store: Store<AppState> , private route: ActivatedRoute) { }

  user: User;
  loading: boolean;
  error: any ;



    ngOnInit() {


      this.route.params.subscribe(p => {
          this.store.dispatch(new GetUser(p.id) );
      });

      this.store.select('user').subscribe( user => {
        this.user = user.user;
        this.loading = user.loading;
        this.error = user.error;
      } );
  }

}
