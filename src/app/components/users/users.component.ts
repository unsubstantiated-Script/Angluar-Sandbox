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
  enableAdd: boolean = true;

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
        isActive: true,
        registered: new Date('11/22/2020 12:34:00'),
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
        isActive: true,
        registered: new Date('10/02/2019 01:38:00'),
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
        isActive: false,
        registered: new Date('03/14/2017 01:40:00'),
      },
    ];
    this.loaded = true;
  }

  addUser(user: User) {
    this.users.push(user);
  }
}
