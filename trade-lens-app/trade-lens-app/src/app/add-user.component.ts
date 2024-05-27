import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { User } from './user';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  user: User = { id: 0, username: '', password: '', email: '', role: '' };
  message: string;

  constructor(private userService: UserService, private formBuilder: FormBuilder) {}
  form: FormGroup;

  ngOnInit() {
    this.form = this.formBuilder.group({
        email: ['', Validators.required],
        password: ['', Validators.required],
        username: ['', Validators.required],
        role: ['', Validators.required]
      });
  }

  addUser() {
    this.user = this.form.value;
    this.userService.addUser(this.user).subscribe(
      user => {
        console.log(user);
        this.message = 'User added successfully';
      },
      error => {
        console.error(error);
        this.message = 'Failed to add user';
      }
    );
  }
}