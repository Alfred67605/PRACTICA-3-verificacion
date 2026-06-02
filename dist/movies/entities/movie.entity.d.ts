export declare enum Genre {
    ACTION = "action",
    COMEDY = "comedy",
    DRAMA = "drama",
    HORROR = "horror",
    SCIFI = "sci-fi",
    THRILLER = "thriller",
    ROMANCE = "romance",
    DOCUMENTARY = "documentary",
    ANIMATION = "animation"
}
export declare class Movie {
    id: string;
    title: string;
    director: string;
    genre: Genre;
    year: number;
    rating: number;
    synopsis: string;
    createdAt: Date;
    updatedAt: Date;
}
