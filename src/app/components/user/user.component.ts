import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  // template: '<h2>John Doe</h2>'
  styleUrls: ['./user.component.css'],
  //  styles: [`
  //     h2 {
  //         color:blue
  //     }
  //  `]
})
export class UserComponent {
  //Properties
  firstName = 'John';
  lastName = 'Doe';
  age = 30;
  address = {
    street: '50 Main Street',
    city: 'Spokompton',
    state: 'UA',
    zip: '99007',
  };

  // Methods
  constructor() {
    //    this.sayHello()
    console.log(this.age);
    this.hasBirthday();
    console.log(this.age);
  }

  sayHello() {
    console.log(`Hello ${this.firstName}`);
  }

  hasBirthday() {
    this.age += 1;
  }
}
