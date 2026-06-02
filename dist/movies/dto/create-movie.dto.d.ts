import { Genre } from '../entities/movie.entity';
export declare class CreateMovieDto {
    title: string;
    director: string;
    genre: Genre;
    year: number;
    rating: number;
    synopsis?: string;
}
