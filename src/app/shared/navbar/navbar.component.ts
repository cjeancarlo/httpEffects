import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



import { AppState } from 'src/app/store/app.reducer';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  constructor( private router: Router ) { }

  ngOnInit() {
  }

  goUser(id: number) {
   this.router.navigate(['user', id]);
  }

}
