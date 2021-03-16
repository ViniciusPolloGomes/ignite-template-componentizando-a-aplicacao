
import '../styles/content.scss';
import { MovieCard } from './MovieCard';


interface ContentProps {
  movies: Array<MovieProps>;
  selectedGenre: string;
}
interface MovieProps {
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

export function Content(props: ContentProps) {
  // Complete aqui

  const { movies, selectedGenre } = props;

  return (
    <div className="container">
      <header>
        <span className="category">Categoria:<span> {selectedGenre}</span></span>
      </header>

      <main>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
          ))}
        </div>
      </main>
    </div>
  );
}