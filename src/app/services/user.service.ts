import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users: User[];
  data: Observable<any>;

  constructor() {
    this.users = [
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'whatwhat@gmail.com',
        isActive: true,
        registered: new Date('11/22/2020 12:34:00'),
        hide: true,
      },
      {
        firstName: 'Shelly',
        lastName: 'Duval',
        email: 'hacked@gmail.com',
        isActive: true,
        registered: new Date('10/02/2019 01:38:00'),
        hide: true,
      },
      {
        firstName: 'Snidley',
        lastName: 'Whiplash',
        email: 'mustache@gmail.com',
        isActive: false,
        registered: new Date('03/14/2017 01:40:00'),
        hide: true,
      },
    ];
  }

  getData() {
    this.data = new Observable((observer) => {
      setTimeout(() => {
        observer.next(1);
      }, 1000);

      setTimeout(() => {
        observer.next(2);
      }, 2000);

      setTimeout(() => {
        observer.next(3);
      }, 3000);

      setTimeout(() => {
        observer.next(4);
      }, 4000);
    });

    return this.data;
  }

  getUsers(): Observable<User[]> {
    return of(this.users);
  }

  addUser(user: User) {
    this.users.unshift(user);
  }
}
