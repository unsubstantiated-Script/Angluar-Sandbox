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
  currentClasses = {};
  currentStyles = {};

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
        isActive: true,
        balance: 33.44,
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
        image: 'https://picsum.photos/id/2/600/600',
        isActive: true,
        balance: 56.4,
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
        image: 'https://picsum.photos/id/44/600/600',
        isActive: false,
        balance: 555.88,
        registered: new Date('03/14/2017 01:40:00'),
      },
    ];
    this.loaded = true;

    // this.showExtended = true;

    this.setCurrentClasses();
    this.setCurrentStyles();

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

  setCurrentClasses() {
    this.currentClasses = {
      'btn-success': this.enableAdd,
      'big-text': this.showExtended,
    };
  }

  setCurrentStyles() {
    this.currentStyles = {
      'padding-top': this.showExtended ? '0' : '40px',
      'font-size': this.showExtended ? ' ' : '4rem',
    };
  }
}
