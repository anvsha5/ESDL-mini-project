package com.example.movieticketbookingsystem.service;

import com.example.movieticketbookingsystem.entity.Booking;
import com.example.movieticketbookingsystem.entity.Show;
import com.example.movieticketbookingsystem.repository.BookingRepository;
import com.example.movieticketbookingsystem.repository.ShowRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class BookingService {
    private final BookingRepository bookingRepository;
    private final ShowRepository showRepository;

    private static final double TICKET_PRICE = 200.0;

    public BookingService(
            BookingRepository bookingRepository,
            ShowRepository showRepository) {
        this.bookingRepository = bookingRepository;
        this.showRepository = showRepository;
    }

    @Transactional
    public Booking createBooking(Booking booking) {

        if (booking.getCustomerName() == null ||
                booking.getCustomerName().isBlank()) {
            throw new IllegalArgumentException("Customer name is required");
        }

        if (booking.getNumberOfTickets() <= 0) {
            throw new IllegalArgumentException("Number of tickets must be greater than zero");
        }

        Show show = showRepository.findById(booking.getShowId())
                .orElseThrow(() ->
                        new RuntimeException("Show not found with id: " + booking.getShowId()));

        if (booking.getNumberOfTickets() > show.getAvailableSeats()) {
            throw new IllegalArgumentException("Not enough seats available");
        }

        show.setAvailableSeats(
                show.getAvailableSeats() - booking.getNumberOfTickets());

        showRepository.save(show);

        booking.setTotalPrice(
                booking.getNumberOfTickets() * TICKET_PRICE);

        booking.setStatus("CONFIRMED");

        return bookingRepository.save(booking);
    }

    public List<Booking> getAllBookings() {
        return bookingRepository.findAll();
    }

    public Booking getBookingById(Long id) {
        return bookingRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Booking not found with id: " + id));
    }
}
