import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users!: User[];
  showExtended: boolean = true;
  loaded: boolean = false;

  constructor() {}

  ngOnInit() {
    this.users = [];

    this.users = [
      {
        firstName: 'John',
        lastName: 'Doe',
        age: 30,
        address: {
          street: '221B Baker St.',
          city: 'London',
          state: 'NH',
          zip: 990033,
        },
      },
      {
        firstName: 'Shelly',
        lastName: 'Duval',
        age: 75,
        address: {
          street: '4543 Grand',
          city: "Coeur d'Alene",
          state: 'ID',
          zip: 86056,
        },
      },
      {
        firstName: 'Snidley',
        lastName: 'Whiplash',
        age: 88,
        address: {
          street: '221B Baker St.',
          city: 'New Brunswick',
          state: 'ON',
          zip: 885599,
        },
      },
    ];
    this.loaded = true;

    this.showExtended = true;

    this.addUser({
      firstName: 'Greenley',
      lastName: 'Nerdles',
      age: 55,
      address: {
        street: '221B Smellish St.',
        city: 'New Brunswick',
        state: 'ON',
        zip: 885599,
      },
    });
  }

  addUser(user: User) {
    this.users.push(user);
  }
}
