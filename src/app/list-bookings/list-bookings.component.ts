import { Component } from '@angular/core';
import { BookingService } from '../services/booking.service';
import { Booking } from '../model/booking.model';
import { DatePipe } from '@angular/common';
import { CommonModule } from '@angular/common';
import { FareCalculatorService } from '../services/fare.service';

@Component({
  selector: 'app-list-bookings',
  standalone: true,
  imports: [DatePipe, CommonModule],
  templateUrl: './list-bookings.component.html',
  styleUrls: ['./list-bookings.component.css'],
})
export class ListBookingsComponent {
  bookings: Booking[] = [];

  // Fare calculation parameters (customize as needed)
  readonly BASE_FARE = 10; // Base fare (fixed)
  readonly TIME_RATE = 0.5; // Rate per minute

  constructor(
    private bookingService: BookingService,
    private FareCalcualtorService: FareCalculatorService
  ) {}

  ngOnInit(): void {
    this.fetchBookings();
  }

  fetchBookings(): void {
    this.bookingService.fetchBookings().subscribe((bookings) => {
      this.bookings = bookings;
      this.fetchFares();
    });
  }

  /**
   * Calculates the duration between two times and returns it in minutes.
   * @param pickupTime - The pickup time as a string or date
   * @param dropoffTime - The dropoff time as a string or date
   * @returns Total ride duration in minutes
   */
  calculateDuration(
    pickupTime: string | Date,
    dropoffTime: string | Date
  ): number {
    const pickup = new Date(pickupTime);
    const dropoff = new Date(dropoffTime);
    const durationMs = dropoff.getTime() - pickup.getTime(); // Duration in milliseconds
    const durationMinutes = Math.floor(durationMs / (1000 * 60)); // Convert to minutes
    return durationMinutes;
  }

  fetchFares(): void {
    this.bookings.forEach((booking) => {
      this.FareCalcualtorService.getFare(booking.bookingID) // Call the backend service with bookingId
        .subscribe(
          (response: any) => {
            // Using type assertion to add fare dynamically
            (booking as any).fare = response.fare; // Store the fare in the booking object
          },
          (error) => {
            console.error('Error fetching fare for booking', booking.bookingID);
          }
        );
    });
  }
}
