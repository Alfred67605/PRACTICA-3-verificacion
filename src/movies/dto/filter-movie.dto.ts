import { IsOptional, IsEnum, IsNumber, Min } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { Genre } from '../entities/movie.entity';

export class FilterMovieDto {
  @ApiPropertyOptional({ enum: Genre, description: 'Filtrar por género' })
  @IsOptional()
  @IsEnum(Genre)
  genre?: Genre;

  @ApiPropertyOptional({ description: 'Filtrar por año' })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  year?: number;

  @ApiPropertyOptional({ description: 'Filtrar por rating mínimo' })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  rating?: number;
}
