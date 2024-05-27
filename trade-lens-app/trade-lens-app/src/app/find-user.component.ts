import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { User } from './user';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-find-user',
  templateUrl: './find-user.component.html',
  styleUrls: ['./find-user.component.css']
})
export class FindUserComponent implements OnInit {
  user: any;
  message: string;

  constructor(private userService: UserService) {}

  form: FormGroup;

  ngOnInit() {
    this.form = new FormGroup({
      userId: new FormControl(''),
    });
  }

  findUser() {
    const userId = this.form.get('userId').value;
    this.userService.getUserById(userId).subscribe(user => {
      if (user) {
        this.user = user;
        this.message = null;
      } else {
        this.user = null;
        this.message = 'Could not find user. Please try again.';
      }
    });
  }
}