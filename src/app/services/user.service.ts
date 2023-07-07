import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  addUser(user: User){
      let users = [];
      let storedUsers = localStorage?.getItem('Users');
      let parsedUsers = storedUsers ? JSON.parse(storedUsers) : null;
      if(localStorage?.getItem('Users'))
      {        
        users = parsedUsers;
        users = [user, ...users];
      }
      else{
        users = [user];
      }
      localStorage.setItem('Users', JSON.stringify(users));
    }

}
