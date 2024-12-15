import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookcabService } from '../services/bookcab.service';
import { BookingRequest } from '../model/bookingrequest.model';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule

@Component({
  selector: 'app-bookcab',
  standalone: true,
  templateUrl: './bookcab.component.html',
  styleUrls: ['./bookcab.component.css'],
  imports: [CommonModule, FormsModule, ReactiveFormsModule], // Add ReactiveFormsModule here
})
export class BookcabComponent {
  bookingForm: FormGroup;
  isBookingSuccess: boolean = false;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private bookcabService: BookcabService,
    private router: Router
  ) {
    // Initialize the form group with necessary fields and validators
    this.bookingForm = this.fb.group({
      username: ['', [Validators.required]],
      carLicensePlate: ['', [Validators.required]],
      pickupLocation: ['', [Validators.required]],
      dropoffLocation: ['', [Validators.required]],
      pickupTime: ['', [Validators.required]],
      dropoffTime: ['', [Validators.required]],
    });
  }

  // Method to handle the form submission
  onSubmit(): void {
    if (this.bookingForm.invalid) {
      return; // Prevent form submission if invalid
    }

    const bookingRequest: BookingRequest = this.bookingForm.value;

    // Call the service to create the booking
    this.bookcabService.createBooking(bookingRequest).subscribe(
      (response: any) => {
        this.isBookingSuccess = true; // Booking was successful
        this.router.navigate(['/list-bookings']); // Redirect to the bookings list page
      },
      (error: any) => {
        this.errorMessage = `Booking failed: ${
          error.message || 'Unknown error'
        }`; // Handle error properly
        console.error('Booking Error:', error); // Log the error for debugging
      }
    );
  }

  // Getter to easily access form controls
  get formControls() {
    return this.bookingForm.controls;
  }
}
