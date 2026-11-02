# Test Cases — Movie Ticket Booking System

## 1. Objective

The objective of testing is to verify that the Movie Ticket Booking System performs its main operations correctly and handles invalid booking requests appropriately.

The tests cover movie retrieval, show retrieval, booking creation, seat availability, booking retrieval, and validation.

## 2. Testing Method

The REST APIs can be tested manually using Postman.

**Testing environment:**
- Backend: Java and Spring Boot
- Database: H2 in-memory database
- API testing tool: Postman
- Base URL: `http://localhost:8080`

## 3. Test Cases

| Test Case ID | Test Scenario | Request/Input | Expected Result |
|---|---|---|---|
| TC01 | Retrieve movies | `GET /api/movies` | Movie list is returned |
| TC02 | Retrieve shows | `GET /api/shows` | Show details and seat availability are returned |
| TC03 | Create a valid booking | Valid customer name, positive ticket quantity, existing show ID | Booking is created successfully |
| TC04 | Book zero tickets | `numberOfTickets: 0` | Request is rejected with a validation error |
| TC05 | Book a negative quantity | `numberOfTickets: -1` | Request is rejected |
| TC06 | Request more tickets than available | Ticket quantity exceeds available seats | Booking is rejected |
| TC07 | Retrieve all bookings | `GET /api/bookings` | Saved bookings are returned |
| TC08 | Retrieve a specific booking | `GET /api/bookings/{id}` with an existing ID | Corresponding booking is returned |
| TC09 | Retrieve a nonexistent booking | Use a booking ID that does not exist | Appropriate error response is returned |
| TC10 | Verify seat availability | Retrieve shows before and after booking | Available seats decrease by the number of tickets booked |

## 4. Example Test Request

### Test: Successful Booking

**Method:** POST

**Endpoint:** `/api/bookings`

**Request Body:**

```json
{
  "customerName": "Anushka",
  "numberOfTickets": 2,
  "showId": 1
}
```

**Expected Result:**

- Booking is created.
- Booking status is `CONFIRMED`.
- Total price is ₹400.
- Available seats decrease by two.

These expectations assume the selected show has sufficient seats and the initial state has not been changed by other bookings.

### Test: Invalid Ticket Quantity

**Method:** POST

**Endpoint:** `/api/bookings`

**Request Body:**

```json
{
  "customerName": "Anushka",
  "numberOfTickets": 0,
  "showId": 1
}
```

**Expected Result:**

The application rejects the request and returns an error indicating that the ticket quantity must be greater than zero.

## 5. Recording Test Results

After executing each test in Postman, record its actual result.

| Test Case ID | Actual Result | Status |
|---|---|---|
| TC01 | To be recorded after execution | Not Run |
| TC02 | To be recorded after execution | Not Run |
| TC03 | To be recorded after execution | Not Run |
| TC04 | To be recorded after execution | Not Run |
| TC05 | To be recorded after execution | Not Run |
| TC06 | To be recorded after execution | Not Run |
| TC07 | To be recorded after execution | Not Run |
| TC08 | To be recorded after execution | Not Run |
| TC09 | To be recorded after execution | Not Run |
| TC10 | To be recorded after execution | Not Run |

Update the status to **Pass** or **Fail** only after executing the test and comparing the actual result with the expected result.

If a test has not been executed, keep its status as **Not Run**.

## 6. Conclusion

Testing helps verify the main operations of the Movie Ticket Booking System and identify problems in booking validation, data retrieval, and seat availability updates.
