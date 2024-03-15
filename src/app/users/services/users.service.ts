import { Injectable } from '@angular/core';
import {User} from '../model/user';
import { HttpClient } from '@angular/common/http';
import { delay, first, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private readonly API = '/assets/ausers.json';

  // injeção de dependência
  constructor(private httpClient: HttpClient) { }

  list(){
    // evitar o .subscribe()
    return this.httpClient.get<User[]>(this.API)
    .pipe(
      first(),
      delay(4000),
      tap(users => console.log(users))
    );
  }
}
