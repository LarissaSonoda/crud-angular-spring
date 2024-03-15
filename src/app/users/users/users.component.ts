import { ErrorDialogComponent } from './../../shared/components/error-dialog/error-dialog.component';
import { Component, OnInit, Inject} from '@angular/core';
import { User } from '../model/user';
import { UsersService } from '../services/users.service';
import { Observable, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  //geralmente não pode tipar como Any
  users$: Observable<User[]> ;
  displayedColumns = ['name', 'telephone_number'];

  //usersService : UsersService;

  constructor(
    private usersService : UsersService,
    public dialog : MatDialog) {
    //this.usersService = new UsersService();
    this.users$ = this.usersService.list()
    .pipe(
      catchError(error => {
        this.onError('Erro ao carregar usuários.')
        return of([])
      })
    );
   }

   onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  ngOnInit(): void {
  }

}
