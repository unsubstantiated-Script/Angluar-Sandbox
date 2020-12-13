import { Component, OnInit } from '@angular/core';

import { User } from '../../models/user.model';

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
export class UserComponent implements OnInit {
  //Properties
  user!: User;

  //Methods
  constructor() {}

  ngOnInit() {
    this.user = {
      firstName: 'John',
      lastName: 'Doe',
      age: 30,
      address: {
        street: '221B Baker St.',
        city: 'London',
        state: 'New Hampshire',
        zip: 990033,
      },
    };
  }
}

// export class UserComponent {
//   //Properties
//   firstName: string;
//   lastName: string;
//   age: number;
//   address: any;

//   foo: any;
//   hasKids: boolean;
//   numberArray: number[];
//   stringArray: string[];
//   mixedArray: any[];
//   myTuple: [string, number, boolean];
//   unusable: void;
//   u: undefined;
//   n: null;

//   // Methods
//   constructor() {
//     this.firstName = 'John';
//     this.lastName = 'Doe';
//     this.age = 33;
//     this.address = {
//       street: '21st West Main',
//       city: 'Kowala',
//       state: 'WA',
//       zip: '99330',
//     };

//     this.foo = true;
//     this.hasKids = true;
//     this.numberArray = [1, 3, 5];
//     this.stringArray = ['hello', 'world'];
//     this.mixedArray = [1, 'grand', true, 'smelly'];
//     this.myTuple = ['helllo', 42, true];
//     this.unusable = undefined;
//     this.u = undefined;
//     this.n = null;
//     //    this.sayHello()
//     // console.log(this.age);
//     // this.hasBirthday();
//     // console.log(this.age);
//     console.log(this.addNumbers(2, 3));
//   }

//   // showAge() {
//   //   return this.age + 2;
//   // }

//   // addNumbers(num1: number, num2: number): number {
//   //   return num1 + num2;
//   // }

//   // sayHello() {
//   //   console.log(`Hello ${this.firstName}`);
//   // }

//   // hasBirthday() {
//   //   this.age += 1;
//   // }
// }
