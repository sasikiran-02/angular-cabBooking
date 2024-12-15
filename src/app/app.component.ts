import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DatePipe } from '@angular/common'; // Import DatePipe
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, CommonModule, DatePipe], // Add DatePipe here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DatePipe, FormsModule], // Provide DatePipe here
})
export class AppComponent {
  title = 'simplilearn-cabbooking-angular';
}
