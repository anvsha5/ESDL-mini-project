package com.example.movieticketbookingsystem.service;

import com.example.movieticketbookingsystem.entity.Show;
import com.example.movieticketbookingsystem.repository.ShowRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ShowService {
    private final ShowRepository showRepository;

    public ShowService(ShowRepository showRepository) {
        this.showRepository = showRepository;
    }

    public Show addShow(Show show) {
        if (show.getTotalSeats() <= 0) {
            throw new IllegalArgumentException("Total seats must be greater than zero");
        }

        if (show.getMovieId() == null || show.getMovieId() <= 0) {
            throw new IllegalArgumentException("Valid movie ID is required");
        }

        show.setAvailableSeats(show.getTotalSeats());

        return showRepository.save(show);
    }

    public List<Show> getAllShows() {
        return showRepository.findAll();
    }

    public Show getShowById(Long id) {
        return showRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Show not found with id: " + id));
    }
}
