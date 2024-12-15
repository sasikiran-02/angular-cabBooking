import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { User } from '../model/user.model';
import { DatePipe } from '@angular/common'; // Import DatePipe
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-list-users',
  standalone: true,
  imports: [CommonModule, DatePipe], // Add CommonModule here
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css'],
})
export class ListUsersComponent implements OnInit {
  users: User[] = [];
  constructor(private UserService: UserService) {}
  ngOnInit() {
    this.fetchUsers();
  }

  private fetchUsers() {
    this.UserService.fetchUsers().subscribe({
      next: (users) => {
        this.users = users;
        console.log('Fetched Users:', this.users); // Log after data is fetched
      },
      error: (err) => {
        console.error('Error fetching users:', err);
      },
    });
  }
}
