import {Age, Card, Info, Match, PosterBackground, Tags, Time, Title} from "./Style";

function RowPoster({movie, isLargeRow, mouseOver}) {
  const base_url = "https://image.tmdb.org/t/p/original/";


  return (
    <>
      <PosterBackground
        key={movie.id}
        src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
        alt={movie.name}
      />
      <Card>
        <Title>{movie.original_title}</Title>
        <Info>
          <Match>99%</Match>
          <Age>16+</Age>
          <Time>1h 30m</Time>
        </Info>

        <Tags>
          <span>Comedy</span>
          <span>Drama</span>
          <span>Action</span>
        </Tags>
      </Card>
    </>
  );
}

export default RowPoster;