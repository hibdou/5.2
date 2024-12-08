import { NgModule, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User, UsersService } from '../services/users/users.service';
@Component({
selector: 'app-home',
imports: [CommonModule],
templateUrl: './home.component.html',
styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
users = new Array<User>();
constructor(private usersService: UsersService) {
}
ngOnInit() {
this.usersService.all().subscribe(res => {
this.users = res;
});
}
}