export class Car {
  carID: number;
  model: string;
  licensePlate: string;
  capacity: number;
  availabilityStatus: AvailabilityStatus;
  createdAt: Date;

  constructor(
    carID: number,
    model: string,
    licensePlate: string,
    capacity: number,
    availabilityStatus: AvailabilityStatus,
    createdAt: Date
  ) {
    this.carID = carID;
    this.model = model;
    this.licensePlate = licensePlate;
    this.capacity = capacity;
    this.availabilityStatus = availabilityStatus;
    this.createdAt = createdAt;
  }
}

// Enum for Availability Status
export enum AvailabilityStatus {
  Available = 'Available',
  Booked = 'Booked',
  UnderMaintenance = 'Undermaintenance',
}
