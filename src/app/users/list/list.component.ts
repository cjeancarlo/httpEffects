import { Component, OnInit } from '@angular/core';

import { User } from '../../models/user.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { GetUsers } from 'src/app/store/actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  users: User[];
  loading: boolean;
  error: any ;

  constructor( private store: Store<AppState>, private  router: Router  ) { }

  ngOnInit() {

    this.store.select('users').subscribe( users => {
      this.users = users.users;
      this.loading = users.loading;
      this.error = users.error;
    } );

    this.store.dispatch(new GetUsers());

  }

  goUser(id: number) {
    this.router.navigate(['user', id]);
   }
 
}
