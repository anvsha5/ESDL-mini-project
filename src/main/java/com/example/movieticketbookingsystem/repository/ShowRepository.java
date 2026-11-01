package com.example.movieticketbookingsystem.repository;

import com.example.movieticketbookingsystem.entity.Show;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ShowRepository extends JpaRepository<Show, Long> {
}
