# Setup Guide — Movie Ticket Booking System

## 1. Introduction

This document explains how to download, configure, and run the Movie Ticket Booking System on a local computer.

The application is developed using Java and Spring Boot and uses an H2 in-memory database.

## 2. Prerequisites

Install the following tools:

- Java Development Kit (JDK)
- IntelliJ IDEA or another compatible Java IDE
- Git
- Postman for API testing

Maven is included through the Maven Wrapper, so a separate Maven installation is not required when the wrapper can be used successfully.

## 3. Clone the Repository

Open a terminal and execute:

```bash
git clone https://github.com/anvsha5/ESDL-mini-project.git
```

Navigate to the project directory:

```bash
cd ESDL-mini-project
```

## 4. Open the Project

1. Open IntelliJ IDEA.
2. Select Open.
3. Choose the cloned project directory.
4. Allow IntelliJ IDEA to load the Maven project and dependencies.
5. Wait for the project indexing and dependency resolution to complete.

## 5. Database Configuration

The application uses an H2 in-memory database.

The configuration is available in:

`src/main/resources/application.properties`

The current database URL is:

```properties
spring.datasource.url=jdbc:h2:mem:moviedb
```

The database is created and managed during application execution.

The project also includes a `DataInitializer` class that initializes default movie and show data when the database is empty.

## 6. Run the Application

### Option A: Using IntelliJ IDEA

1. Open `MovieTicketBookingSystemApplication.java`.
2. Locate the `main()` method.
3. Click the Run button.
4. Wait until Spring Boot starts successfully.

### Option B: Using Maven Wrapper on Windows

Open the terminal in the project root and run:

```powershell
.\mvnw.cmd spring-boot:run
```

### Option C: Using Maven Wrapper on macOS or Linux

Run:

```bash
./mvnw spring-boot:run
```

After successful startup, the backend is available at:

`http://localhost:8080`

## 7. Access the Frontend

Open a web browser and visit:

`http://localhost:8080/`

The frontend allows users to view movies, select shows, and create ticket bookings through the backend APIs.

## 8. Test the Backend Using Postman

Use the following endpoints:

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/api/movies` | Retrieve movies |
| GET | `/api/shows` | Retrieve shows |
| POST | `/api/bookings` | Create a booking |
| GET | `/api/bookings` | Retrieve all bookings |
| GET | `/api/bookings/{id}` | Retrieve a specific booking |

For POST requests, select **Body → raw → JSON** and provide the required request fields.

## 9. Access the H2 Console

Open:

`http://localhost:8080/h2-console`

Use the following settings:

| Field | Value |
|---|---|
| JDBC URL | `jdbc:h2:mem:moviedb` |
| Username | `sa` |
| Password | Leave blank |

Click Connect to access the database.

The H2 console is available while the application is running and the configured in-memory database exists.

## 10. Important Notes

- Ensure the application starts successfully before sending API requests.
- The default port is 8080.
- If the port is already in use, the application may fail to start.
- The H2 database is in memory, so its data may reset after an application restart.
- Default movie and show data are initialized when the database is empty.
- Use the actual booking ID returned by the API when retrieving a specific booking.

## 11. Troubleshooting

### Application fails to start

Check the IntelliJ console for startup errors.

### API request fails

Verify that the application is running and the request URL and HTTP method are correct.

### Frontend does not load

Confirm that the backend is running and visit `http://localhost:8080/`.

### H2 Console cannot connect

Check the JDBC URL, username, password, and whether the application is currently running.

## 12. Conclusion

Following these steps allows a developer to set up, run, and test the Movie Ticket Booking System locally.
