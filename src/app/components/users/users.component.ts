import { Component, OnInit, ViewChild } from '@angular/core';
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
    email: '',
  };
  users!: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = false;
  showUserForm: boolean = false;
  @ViewChild('userForm') form: any;

  constructor() {}

  ngOnInit() {
    this.users = [];

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
    this.loaded = true;
  }

  onSubmit({ value, valid }: { value: User; valid: boolean }) {
    if (!valid) {
      console.log('Form is not valid');
    } else {
      value.isActive = true;
      value.registered = new Date();
      value.hide = true;

      this.users.unshift(value);
      this.form.reset();
    }
  }
}
