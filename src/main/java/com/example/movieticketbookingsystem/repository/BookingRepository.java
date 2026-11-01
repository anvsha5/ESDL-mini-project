package com.example.movieticketbookingsystem.repository;

import com.example.movieticketbookingsystem.entity.Booking;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookingRepository extends JpaRepository<Booking, Long> {
}
