import { Movie } from './movie.interface';

export interface MovieList extends Array<Movie> {
    // [prop: number]: Movie; niepotrzebna informacja - jest zawarta w dziedziczeniu
}
