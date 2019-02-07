import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map  } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserService {

private readonly URL = 'https://reqres.in/api';

constructor(private http: HttpClient ) { }


getUser(id) {
  return this.getUsers(id);
}

getUsers( id  = null ) {
const  innerUrl = id ? `users/${id}` : 'users?per_page=6';
return this.http.get(`${ this.URL}/${innerUrl}`)
  .pipe(
    map( ( resp: any )  => resp.data )
  );
}

}
