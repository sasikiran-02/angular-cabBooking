import { User } from './user.model';
import { Car } from './car.model';

export enum BookingStatus {
  PENDING = 'PENDING',
  CONFIRMED = 'CONFIRMED',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED',
}

export interface Booking {
  bookingID: number;
  user: User;
  car: Car;
  pickupLocation: string;
  dropoffLocation: string;
  pickupTime: string; // Date in ISO string format
  dropoffTime: string; // Date in ISO string format
  bookingStatus: BookingStatus;
  createdAt: string; // Date in ISO string format
  fare?: number;
}
