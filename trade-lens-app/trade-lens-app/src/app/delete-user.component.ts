import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {
  id: number;

  constructor(private userService: UserService) {}

  form: FormGroup;
  message: string;

  ngOnInit() {
    this.form = new FormGroup({
      userId: new FormControl(''),
    });
  }

  deleteUser() {
    const userId = this.form.get('userId').value;
    this.userService.deleteUser(userId).subscribe(
      response => {
        console.log(response);
        this.message = 'Successfully deleted user';
      },
      error => {
        this.message = 'Error: User not found';
      }
    );
  }
}