import { MoviesService } from './movies.service';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { FilterMovieDto } from './dto/filter-movie.dto';
import { Movie } from './entities/movie.entity';
export declare class MoviesController {
    private readonly moviesService;
    constructor(moviesService: MoviesService);
    create(createMovieDto: CreateMovieDto): Promise<Movie>;
    findAll(filterMovieDto: FilterMovieDto): Promise<Movie[]>;
    findOne(id: string): Promise<Movie>;
    update(id: string, updateMovieDto: UpdateMovieDto): Promise<Movie>;
    remove(id: string): Promise<void>;
}
