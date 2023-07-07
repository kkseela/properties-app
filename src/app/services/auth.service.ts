import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  authUser(user: User){
    let userArray = [];
    if(localStorage.getItem('Users'))
    {
        const storedUsers = localStorage.getItem('Users');
        const parsedUsers = storedUsers ? JSON.parse(storedUsers) : null;
        userArray = parsedUsers;
      //userArray = JSON.parse(localStorage.getItem('Users'));
    }
  }
}
