# API Documentation — Movie Ticket Booking System

## 1. Overview

The Movie Ticket Booking System provides REST APIs developed using Java and Spring Boot.

These APIs allow clients to retrieve movie and show information, create ticket bookings, and retrieve booking details.

**Base URL:** `http://localhost:8080`

## 2. API Endpoints

| HTTP Method | Endpoint | Description |
|---|---|---|
| GET | `/api/movies` | Retrieve all movies |
| GET | `/api/shows` | Retrieve all shows |
| POST | `/api/bookings` | Create a new booking |
| GET | `/api/bookings` | Retrieve all bookings |
| GET | `/api/bookings/{id}` | Retrieve a booking by ID |

## 3. Get All Movies

**Endpoint:** `/api/movies`

**Method:** GET

**Purpose:** Retrieves the available movie records.

**Example Request:**

```http
GET http://localhost:8080/api/movies
```

**Response:**

The API returns a JSON array containing movie details such as ID, title, genre, and duration.

Example structure:

```json
[
  {
    "id": 1,
    "title": "3 Idiots",
    "genre": "Comedy",
    "durationMinutes": 170
  }
]
```

The actual response may contain additional movies and different IDs.

## 4. Get All Shows

**Endpoint:** `/api/shows`

**Method:** GET

**Purpose:** Retrieves show information and seat availability.

**Example Request:**

```http
GET http://localhost:8080/api/shows
```

The response includes details such as show ID, movie ID, show time, total seats, and available seats.

## 5. Create a Booking

**Endpoint:** `/api/bookings`

**Method:** POST

**Purpose:** Creates a ticket booking for a selected show.

**Request Headers:**

```http
Content-Type: application/json
```

**Request Body:**

```json
{
  "customerName": "Anushka",
  "numberOfTickets": 2,
  "showId": 1
}
```

**Request Parameters:**

| Field | Description |
|---|---|
| `customerName` | Name of the customer |
| `numberOfTickets` | Number of tickets requested |
| `showId` | ID of the selected show |

**Expected Behaviour:**

1. The backend validates the booking request.
2. It checks whether the selected show exists.
3. It verifies seat availability.
4. It calculates the total price.
5. It updates available seats.
6. It saves the booking and returns the booking details.

The ticket price in the current implementation is ₹200 per ticket.

For two tickets:

`Total Price = 2 × ₹200 = ₹400`

A successful response includes the booking ID, customer name, ticket quantity, total price, and booking status.

## 6. Get All Bookings

**Endpoint:** `/api/bookings`

**Method:** GET

**Purpose:** Retrieves all saved bookings.

**Example Request:**

```http
GET http://localhost:8080/api/bookings
```

The response contains the available booking records.

## 7. Get Booking by ID

**Endpoint:** `/api/bookings/{id}`

**Method:** GET

**Purpose:** Retrieves an individual booking using its ID.

**Example Request:**

```http
GET http://localhost:8080/api/bookings/1
```

Replace `1` with the actual booking ID.

## 8. Validation and Error Handling

The application validates booking requests and rejects invalid operations.

Examples include:

- A ticket quantity of zero.
- A negative ticket quantity.
- A show that does not exist.
- Insufficient available seats.

The application uses global exception handling for supported exceptions.

The exact HTTP status code and error message depend on the exception and the current implementation.

## 9. Testing

These APIs can be tested using Postman.

1. Start the Spring Boot application.
2. Send GET requests to retrieve movies and shows.
3. Send a POST request to create a booking.
4. Retrieve the shows again to verify seat availability.
5. Retrieve all bookings or a specific booking.
6. Send invalid requests to test error handling.

## 10. Conclusion

These REST APIs provide the main backend functionality of the Movie Ticket Booking System and allow clients to interact with the application through HTTP requests and JSON responses.
