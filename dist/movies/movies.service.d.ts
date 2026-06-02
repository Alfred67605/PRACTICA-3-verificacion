import { Repository } from 'typeorm';
import { Movie } from './entities/movie.entity';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { FilterMovieDto } from './dto/filter-movie.dto';
export declare class MoviesService {
    private readonly movieRepository;
    constructor(movieRepository: Repository<Movie>);
    create(createMovieDto: CreateMovieDto): Promise<Movie>;
    findAll(filterMovieDto?: FilterMovieDto): Promise<Movie[]>;
    findOne(id: string): Promise<Movie>;
    update(id: string, updateMovieDto: UpdateMovieDto): Promise<Movie>;
    remove(id: string): Promise<void>;
}
