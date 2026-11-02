# Future Scope and Limitations — Movie Ticket Booking System

## 1. Introduction
The Movie Ticket Booking System demonstrates the main operations involved in movie ticket booking, including movie retrieval, show retrieval, booking creation, seat availability updates, and booking retrieval.
This document describes the current limitations of the application and possible enhancements for future development.

## 2. Current Features
The current implementation includes:
- Retrieving movie details through REST APIs.
- Retrieving show details and seat availability.
- Creating ticket bookings.
- Calculating the total booking price.
- Updating available seats after a successful booking.
- Retrieving all bookings.
- Retrieving a specific booking by ID.
- Validating booking requests.
- Handling supported exceptions.
- A web frontend connected to the backend APIs.

## 3. Current Limitations

### 3.1 In-Memory Database
The application uses an H2 in-memory database. Data may reset when the application restarts.
A persistent database could be introduced to retain records across restarts.

### 3.2 User Authentication
The current application does not include a complete user registration and authentication system.
Future versions could provide secure user accounts and login functionality.

### 3.3 Payment Integration
The application supports booking confirmation but does not integrate a real payment gateway.
A future version could integrate a payment provider to support online payments.

### 3.4 Seat Selection
The application tracks available seat quantities. Individual seat selection and seat-level locking are not included in the current implementation.
A future version could provide a seat layout and allow users to select specific seats.

### 3.5 Booking Cancellation
A dedicated booking cancellation workflow could be added to manage cancellations and restore seat availability appropriately.

## 4. Proposed Future Enhancements

### 4.1 Persistent Database
Integrate a persistent relational database, such as MySQL or PostgreSQL, to retain application data across restarts.

### 4.2 User Registration and Authentication
Add user registration, login, and authorization to support user-specific booking histories.

### 4.3 Online Payment Gateway
Integrate a payment gateway and manage payment success, failure, and transaction status.

### 4.4 Individual Seat Selection
Allow users to view a seating layout and select individual seats before confirming a booking.

### 4.5 Booking Cancellation
Implement cancellation rules and update seat availability when a booking is cancelled.

### 4.6 Movie Search and Filtering
Add search and filtering options based on movie title, genre, or other relevant attributes.

### 4.7 Automated Testing
Expand automated tests to cover service logic, API behaviour, validation, and error handling.

### 4.8 Deployment
Deploy the application to a suitable hosting platform so that it can be accessed beyond the local development environment.

## 5. Expected Benefits

These enhancements could improve:

- Data persistence.
- User experience.
- Booking management.
- Payment handling.
- Application reliability.
- Maintainability.
- Accessibility.

## 6. Conclusion

The current Movie Ticket Booking System provides a foundation for demonstrating backend development and REST API integration.

The proposed enhancements could extend the application into a more comprehensive movie booking platform in future iterations.
