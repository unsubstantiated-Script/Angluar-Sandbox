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
        image: 'https://picsum.photos/id/1/600/600',
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
        image: 'https://picsum.photos/id/2/600/600',
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
        image: 'https://picsum.photos/id/44/600/600',
      },
    ];
    this.loaded = true;

    this.showExtended = true;

    // this.addUser({
    //   firstName: 'Greenley',
    //   lastName: 'Nerdles',
    //   age: 55,
    //   address: {
    //     street: '221B Smellish St.',
    //     city: 'New Brunswick',
    //     state: 'ON',
    //     zip: 885599,
    //   },
    // });
  }

  addUser(user: User) {
    this.users.push(user);
  }
}
