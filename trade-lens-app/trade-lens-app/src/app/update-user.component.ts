import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { User } from './user';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  user: User = { id: 0, username: '', password: '', email: '', role: '' }; 

  constructor(private userService: UserService) {}

  form: FormGroup;

  ngOnInit() {
    this.form = new FormGroup({
      userId: new FormControl(''),
      newUserName: new FormControl(''),
      newEmail: new FormControl(''),
      newPassword: new FormControl('')
    });
  }

  updateUser() {
    this.user = {
      id: this.form.get('userId').value,
      email: this.form.get('newEmail').value,
      password: this.form.get('newPassword').value,
      username: this.form.get('newUserName').value,
      role: 'USER' //Dummy role, it will not be affected by update regardless
    };
  
    this.userService.updateUser(this.user).subscribe(user => console.log(user));
  }

}