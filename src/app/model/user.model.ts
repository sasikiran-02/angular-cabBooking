export class User {
  userId: number; // Notice the change to lowercase 'userId'
  name: string; // 'Name' -> 'name'
  email: string; // 'Email' -> 'email'
  phoneNumber: string; // 'PhoneNumber' -> 'phoneNumber'
  password: string;
  username: string;
  createdAt: Date;

  constructor(
    userId: number,
    name: string,
    email: string,
    phoneNumber: string,
    password: string,
    username: string,
    createdAt: Date
  ) {
    this.userId = userId;
    this.name = name;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.password = password;
    this.username = username;
    this.createdAt = createdAt;
  }
}
