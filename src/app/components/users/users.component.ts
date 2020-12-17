import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  user: User = {
    firstName: '',
    lastName: '',
    age: null,
    address: {
      street: '',
      city: '',
      state: '',
      zip: null,
    },
  };
  users!: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = false;
  showUserForm: boolean = false;

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
        hide: true,
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
        hide: true,
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
        hide: true,
      },
    ];
    this.loaded = true;
  }

  addUser() {
    this.user.isActive = true;
    this.user.registered = new Date();
    this.users.unshift(this.user);

    this.user = {
      firstName: '',
      lastName: '',
      age: null,
      address: {
        street: '',
        city: '',
        state: '',
        zip: null,
      },
    };
  }

  onSubmit(e) {
    e.preventDefault();
    console.log('123');
  }

  fireEvent(e) {
    console.log(e.target.value);
  }

  // toggleHide(user: User) {
  //   user.hide = !user.hide;
  // }
}
