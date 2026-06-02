"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoviesController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const movies_service_1 = require("./movies.service");
const create_movie_dto_1 = require("./dto/create-movie.dto");
const update_movie_dto_1 = require("./dto/update-movie.dto");
const filter_movie_dto_1 = require("./dto/filter-movie.dto");
const movie_entity_1 = require("./entities/movie.entity");
let MoviesController = class MoviesController {
    constructor(moviesService) {
        this.moviesService = moviesService;
    }
    create(createMovieDto) {
        return this.moviesService.create(createMovieDto);
    }
    findAll(filterMovieDto) {
        return this.moviesService.findAll(filterMovieDto);
    }
    findOne(id) {
        return this.moviesService.findOne(id);
    }
    update(id, updateMovieDto) {
        return this.moviesService.update(id, updateMovieDto);
    }
    remove(id) {
        return this.moviesService.remove(id);
    }
};
exports.MoviesController = MoviesController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Crear una nueva película' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Película creada exitosamente', type: movie_entity_1.Movie }),
    (0, swagger_1.ApiResponse)({ status: 422, description: 'Error de validación de datos' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_movie_dto_1.CreateMovieDto]),
    __metadata("design:returntype", Promise)
], MoviesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener todas las películas' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista de películas', type: [movie_entity_1.Movie] }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [filter_movie_dto_1.FilterMovieDto]),
    __metadata("design:returntype", Promise)
], MoviesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener una película por UUID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'UUID de la película' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Película encontrada', type: movie_entity_1.Movie }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'UUID con formato inválido' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Película no encontrada' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MoviesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Actualizar parcialmente una película' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'UUID de la película' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Película actualizada', type: movie_entity_1.Movie }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'UUID con formato inválido' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Película no encontrada' }),
    (0, swagger_1.ApiResponse)({ status: 422, description: 'Error de validación de datos' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_movie_dto_1.UpdateMovieDto]),
    __metadata("design:returntype", Promise)
], MoviesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Eliminar una película' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'UUID de la película' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Película eliminada correctamente' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'UUID con formato inválido' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Película no encontrada' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MoviesController.prototype, "remove", null);
exports.MoviesController = MoviesController = __decorate([
    (0, swagger_1.ApiTags)('movies'),
    (0, common_1.Controller)('movies'),
    __metadata("design:paramtypes", [movies_service_1.MoviesService])
], MoviesController);
//# sourceMappingURL=movies.controller.js.map