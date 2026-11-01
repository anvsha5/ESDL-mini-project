let selectedShowId = null;

async function loadMovies() {
        const movieContainer = document.getElementById("movieContainer");

        try {
            const response = await fetch("/api/movies");

            if (!response.ok) {
                throw new Error("Failed to load movies");
            }

            const movies = await response.json();

            movieContainer.innerHTML = "";

            movies.forEach(movie => {
                const card = document.createElement("div");
                card.className = "movie-card";
                const posterImages = {
                    "3 Idiots": "https://image.tmdb.org/t/p/w500/66A9MqXOyVFCssoloscw79z8Tew.jpg",
                    "Interstellar": "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
                    "Fast X": "https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg"

                };

                card.innerHTML = `
    <div class="movie-poster">
        <img
            src="${posterImages[movie.title] || ''}"
            alt="${movie.title} poster"
            onerror="this.style.display='none'"
        >
    </div>
    <h3>${movie.title}</h3>
    <p>${movie.genre} · ${movie.durationMinutes} min</p>
    <button onclick="selectMovie(${movie.id})">
        Book Tickets
    </button>
`;

                movieContainer.appendChild(card);
            });

        } catch (error) {
            console.error("Error loading movies:", error);
            movieContainer.innerHTML = "<p>Unable to load movies. Please try again.</p>";
        }
    }

    loadMovies();

async function selectMovie(movieId) {
    const showContainer = document.getElementById("showContainer");

    showContainer.innerHTML = "<p>Loading shows...</p>";

    try {
        const response = await fetch("/api/shows");

        if (!response.ok) {
            throw new Error("Failed to load shows");
        }

        const shows = await response.json();

        const movieShows = shows.filter(show => show.movieId === movieId);

        if (movieShows.length === 0) {
            showContainer.innerHTML = "<p>No shows available for this movie.</p>";
            return;
        }

        showContainer.innerHTML = "";

        movieShows.forEach(show => {
            const showCard = document.createElement("div");
            showCard.className = "movie-card";

            showCard.innerHTML = `
<p>Showtime: ${show.showTime}</p>
<p>Available seats: ${show.availableSeats}</p>
<button onclick="selectShow(${show.id})">
    Select Show
</button>
    `;

            showContainer.appendChild(showCard);
        });

    } catch (error) {
        console.error("Error loading shows:", error);
        showContainer.innerHTML = "<p>Unable to load shows.</p>";
    }
}

function selectShow(showId) {
    selectedShowId = showId;

    document.getElementById("booking").scrollIntoView({
        behavior: "smooth"
    });

    document.getElementById("bookingMessage").textContent =
        "Show selected! Please enter your booking details.";
}

const ticketPrice = 200;

function updateTotalPrice() {
    const ticketInput = document.getElementById("numberOfTickets");
    const numberOfTickets = Number(ticketInput.value);

    const total = numberOfTickets > 0
        ? numberOfTickets * ticketPrice
        : 0;

    document.getElementById("totalPrice").textContent = total;
}

document.getElementById("numberOfTickets").addEventListener(
    "input",
    updateTotalPrice
);

document.getElementById("bookingForm").addEventListener("submit", async function(event) {
    event.preventDefault();

    const customerName = document.getElementById("customerName").value.trim();
    const numberOfTickets = Number(document.getElementById("numberOfTickets").value);
    const bookingMessage = document.getElementById("bookingMessage");

    if (selectedShowId === null) {
        bookingMessage.textContent = "Please select a show first!";
        bookingMessage.style.color = "#F87171";
        return;
    }

    if (!customerName || numberOfTickets <= 0) {
        bookingMessage.textContent = "Please enter valid booking details.";
        bookingMessage.style.color = "#F87171";
        return;
    }

    try {
        const response = await fetch("/api/bookings", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                customerName: customerName,
                numberOfTickets: numberOfTickets,
                showId: selectedShowId
            })
        });

        const booking = await response.json();

        if (!response.ok) {
            throw new Error(booking.error || "Booking failed. Please try again.");
        }

        bookingMessage.style.color = "#4ADE80";
        bookingMessage.innerHTML = `
            <h3>🎉 Booking Confirmed!</h3>
            <p>Booking ID: ${booking.id}</p>
            <p>Name: ${booking.customerName}</p>
            <p>Tickets: ${booking.numberOfTickets}</p>
            <p>Total: ₹${booking.totalPrice}</p>
            <p>Status: ${booking.status}</p>
        `;

        document.getElementById("bookingForm").reset();
        updateTotalPrice();

        const bookedShowId = selectedShowId;
        selectedShowId = null;

// Refresh the selected show's availability
        await selectMovieShowRefresh(bookedShowId);

    } catch (error) {
        bookingMessage.textContent = error.message;
        bookingMessage.style.color = "#F87171";
    }
});

async function loadBookings() {
    const container = document.getElementById("bookingsContainer");

    container.innerHTML = "<p>Loading bookings...</p>";

    try {
        const response = await fetch("/api/bookings");

        if (!response.ok) {
            throw new Error("Unable to load bookings.");
        }

        const bookings = await response.json();

        if (bookings.length === 0) {
            container.innerHTML = "<p>No bookings found.</p>";
            return;
        }

        container.innerHTML = "";

        bookings.forEach(booking => {
            const card = document.createElement("div");
            card.className = "movie-card";

            const details = document.createElement("div");

            const title = document.createElement("h3");
            title.textContent = `Booking #${booking.id}`;

            const name = document.createElement("p");
            name.textContent = `Customer: ${booking.customerName}`;

            const tickets = document.createElement("p");
            tickets.textContent = `Tickets: ${booking.numberOfTickets}`;

            const total = document.createElement("p");
            total.textContent = `Total: ₹${booking.totalPrice}`;

            const status = document.createElement("p");
            status.textContent = `Status: ${booking.status}`;

            details.append(title, name, tickets, total, status);
            card.appendChild(details);
            container.appendChild(card);
        });

    } catch (error) {
        container.textContent = error.message;
    }
}


async function selectMovieShowRefresh(showId) {
    const showContainer = document.getElementById("showContainer");

    try {
        const response = await fetch("/api/shows");

        if (!response.ok) {
            throw new Error("Unable to refresh show availability.");
        }

        const shows = await response.json();
        const updatedShow = shows.find(show => show.id === showId);

        if (!updatedShow) {
            showContainer.textContent = "Show not found.";
            return;
        }

        showContainer.innerHTML = "";

        const card = document.createElement("div");
        card.className = "movie-card";

        const time = document.createElement("p");
        time.textContent = `Showtime: ${updatedShow.showTime}`;

        const seats = document.createElement("p");
        seats.textContent = `Available seats: ${updatedShow.availableSeats}`;

        const button = document.createElement("button");
        button.textContent = "Select Show";
        button.onclick = () => selectShow(updatedShow.id);

        card.append(time, seats, button);
        showContainer.appendChild(card);

    } catch (error) {
        showContainer.textContent = error.message;
    }
}