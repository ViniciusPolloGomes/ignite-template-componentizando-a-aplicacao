
import { Button } from "./Button";

import '../styles/sidebar.scss';
import '../styles/button.scss';

interface SideBarProps {
  selectedGenreId: number;
  handleClickButton: Function;
  genres: Array<GenreResponseProps>;
}

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

export function SideBar(props: SideBarProps) {
  // Complete aqui
  const { genres, handleClickButton, selectedGenreId } = props;

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <nav className="sidebar">
        <span>Watch<p>Me</p></span>
        <div className="buttons-container">
          {genres.map(genre => (
            <Button
              id={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => handleClickButton(genre.id)}
              selected={selectedGenreId === genre.id}
            />
          ))}
        </div>
      </nav>
    </div>
  );
}