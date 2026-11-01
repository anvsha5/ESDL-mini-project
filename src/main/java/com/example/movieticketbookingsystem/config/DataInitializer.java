package com.example.movieticketbookingsystem.config;

import com.example.movieticketbookingsystem.entity.Movie;
import com.example.movieticketbookingsystem.repository.MovieRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import com.example.movieticketbookingsystem.entity.Show;
import com.example.movieticketbookingsystem.repository.ShowRepository;
import java.util.List;

@Configuration
public class DataInitializer {
    @Bean
    CommandLineRunner initializeMovies(
            MovieRepository movieRepository,
            ShowRepository showRepository) {
        return args -> {
            // Initialize default movies
            if (movieRepository.count() == 0) {

                Movie movie1 = new Movie();
                movie1.setTitle("3 Idiots");
                movie1.setDurationMinutes(170);
                movie1.setGenre("Comedy");

                Movie movie2 = new Movie();
                movie2.setTitle("Interstellar");
                movie2.setDurationMinutes(169);
                movie2.setGenre("Sci-Fi");

                Movie movie3 = new Movie();
                movie3.setTitle("Fast X");
                movie3.setDurationMinutes(161);
                movie3.setGenre("Action");

                movieRepository.save(movie1);
                movieRepository.save(movie2);
                movieRepository.save(movie3);

                System.out.println("Default movies added successfully!");
            }

            // Initialize default shows
            if (showRepository.count() == 0) {

                List<Movie> movies = movieRepository.findAll();

                if (movies.size() >= 3) {

                    Show show1 = new Show();
                    show1.setMovieId(movies.get(0).getId());
                    show1.setShowTime("2026-11-01 18:00:00");
                    show1.setTotalSeats(50);
                    show1.setAvailableSeats(50);

                    Show show2 = new Show();
                    show2.setMovieId(movies.get(1).getId());
                    show2.setShowTime("2026-11-02 16:00:00");
                    show2.setTotalSeats(50);
                    show2.setAvailableSeats(50);

                    Show show3 = new Show();
                    show3.setMovieId(movies.get(2).getId());
                    show3.setShowTime("2026-12-01 13:00:00");
                    show3.setTotalSeats(50);
                    show3.setAvailableSeats(50);

                    showRepository.save(show1);
                    showRepository.save(show2);
                    showRepository.save(show3);

                    System.out.println("Default shows added successfully!");
                }
            }
        };
    }
}
