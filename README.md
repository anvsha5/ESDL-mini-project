# 🎬 Movie Ticket Booking System

A Movie Ticket Booking System developed using **Java and Spring Boot**. The application provides REST APIs to retrieve movies and shows, book tickets, manage seat availability, and retrieve booking details.

The project also includes a web-based frontend that interacts with the backend APIs.

## ✨ Features

- 🎥 Retrieve all available movies.
- 🕒 View movie shows and their seat availability.
- 🎟️ Book tickets for a selected show.
- 💰 Automatically calculate the total ticket price.
- 💺 Update seat availability after successful bookings.
- 📋 Retrieve all bookings or a specific booking.
- ✅ Validate booking requests.
- ⚠️ Handle invalid requests with appropriate error responses.
- 🌐 Web-based frontend for interacting with the application.

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| Java | Backend programming language |
| Spring Boot | Application development and REST APIs |
| Spring Web | Handling HTTP requests and responses |
| Spring Data JPA | Database operations |
| H2 Database | In-memory relational database |
| Maven | Dependency management and build automation |
| HTML | Frontend structure |
| CSS | Frontend styling |
| JavaScript | Frontend interactions and API integration |
| Postman | API testing |

## 📁 Project Structure

```text
movieTicketBookingSystem/
│
├── .mvn/
│   └── wrapper/
│
├── src/
│   └── main/
│       ├── java/
│       │   └── com/example/movieticketbookingsystem/
│       │       ├── config/
│       │       │   └── DataInitializer.java
│       │       ├── controller/
│       │       ├── dto/
│       │       ├── entity/
│       │       ├── exception/
│       │       ├── repository/
│       │       ├── service/
│       │       └── MovieTicketBookingSystemApplication.java
│       │
│       └── resources/
│           ├── static/
│           │   └── index.html
│           └── application.properties
│
├── .gitattributes
├── .gitignore
├── mvnw
├── mvnw.cmd
├── pom.xml
└── README.md
```

## 🏗️ Application Architecture

The application follows a layered architecture.

1. **Controller Layer:** Receives HTTP requests and returns responses.
2. **Service Layer:** Implements business logic, including booking validation, price calculation, and seat availability updates.
3. **Repository Layer:** Handles database access using Spring Data JPA.
4. **Entity Layer:** Represents application data, including movies, shows, and bookings.
5. **Database Layer:** Stores application data using the H2 in-memory database.

### Booking Flow

```text
Client / Postman
       |
       v
Controller Layer
       |
       v
Service Layer
       |
       v
Repository Layer
       |
       v
H2 Database
       |
       v
HTTP Response
```

## ⚙️ Prerequisites

Before running the project, ensure you have:

- Java Development Kit (JDK)
- Maven, or use the included Maven Wrapper
- IntelliJ IDEA or another Java IDE
- Postman for testing the REST APIs

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/anvsha5/ESDL-mini-project.git
```

### 2. Open the Project

Open the cloned project folder in IntelliJ IDEA.

Allow Maven to load the project dependencies.

### 3. Configure the Database

The application uses the H2 in-memory database.

The database configuration is available in `src/main/resources/application.properties`.

Current configuration:

```properties
spring.application.name=movieTicketBookingSystem
spring.datasource.url=jdbc:h2:mem:moviedb
spring.datasource.driver-class-name=org.h2.Driver
spring.datasource.username=sa
spring.datasource.password=
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.h2.console.enabled=true
spring.h2.console.path=/h2-console
```

### 4. Run the Application

You can run `MovieTicketBookingSystemApplication.java` directly from IntelliJ IDEA.

Alternatively, on Windows, open a terminal in the project root and execute:

```bash
.\mvnw.cmd spring-boot:run
```

On macOS or Linux:

```bash
./mvnw spring-boot:run
```

Once the application starts successfully, the backend will be available at:

`http://localhost:8080`

### 5. Open the Frontend

Open the following address in your browser:

`http://localhost:8080/`

The frontend allows users to browse movies, select shows, book tickets, and view booking information.

## 🔌 REST API Endpoints

The following endpoints are available in the application.

| HTTP Method | Endpoint | Description |
|---|---|---|
| GET | `/api/movies` | Retrieve all movies |
| GET | `/api/shows` | Retrieve all shows |
| POST | `/api/bookings` | Create a ticket booking |
| GET | `/api/bookings` | Retrieve all bookings |
| GET | `/api/bookings/{id}` | Retrieve a specific booking |

### Example: Create a Booking

**Endpoint:**

```http
POST /api/bookings
```

**Request Body:**

```json
{
  "customerName": "Anushka",
  "numberOfTickets": 2,
  "showId": 1
}
```

The request contains the customer's name, number of tickets, and selected show ID.

The backend validates the request, checks seat availability, calculates the total price, updates the show, and saves the booking.

**Example calculation:**

```text
Ticket Price = ₹200
Number of Tickets = 2
Total Price = ₹400
```

The actual response includes the booking details and confirmation status.

## 🧪 Testing with Postman

You can test the backend APIs using Postman.

1. Start the Spring Boot application.
2. Send a GET request to `/api/movies` to retrieve movies.
3. Send a GET request to `/api/shows` to retrieve shows and check seat availability.
4. Send a POST request to `/api/bookings` with a valid JSON request body.
5. Send another GET request to `/api/shows` to verify the updated seat availability.
6. Use `/api/bookings` to retrieve all bookings.
7. Use `/api/bookings/{id}` to retrieve a specific booking.
8. Test invalid requests to verify validation and error handling.

## 🗄️ H2 Database Console

The H2 Console can be accessed at:

`http://localhost:8080/h2-console`

Use the following connection details:

| Setting | Value |
|---|---|
| JDBC URL | `jdbc:h2:mem:moviedb` |
| Username | `sa` |
| Password | Leave blank |

The database is configured as an **in-memory database**, so its data may reset when the application restarts.

The `DataInitializer` class initializes the default movie and show data when the database is empty.

## 🔮 Future Enhancements

Possible improvements for future versions include:

- User registration and authentication.
- Persistent database storage.
- Movie search and filtering.
- Seat selection and seat-level availability.
- Integration with a real payment gateway.
- Booking cancellation.
- Improved validation and automated testing.
- Deployment to a cloud platform.

## 👩‍💻 Contributors

Developed as a collaborative mini-project for academic purposes.

## 📄 License

This project was developed for educational purposes.