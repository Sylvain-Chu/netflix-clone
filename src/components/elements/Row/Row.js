import axios from '../axios';
import React, { useEffect, useState, useCallback } from 'react';
import { RowContainer, Title, RowPosters, RowPoster, Slider, TitleLink, ExploreFade, SeeAllLink } from './Style';

function Row({ title, fetchUrl }) {
    const [movies, setMovies] = useState();
    const base_url = "https://image.tmdb.org/t/p/original/";

    const fetchData = useCallback(async () => {
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results);
        return request;
    }, [fetchUrl]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return (
      <RowContainer>
          <Title>
            <TitleLink>
              {title}
            </TitleLink>
            {/*<ExploreFade>*/}
              {/*<SeeAllLink>*/}
              {/*  See All*/}
              {/*</SeeAllLink>*/}
            {/*</ExploreFade>*/}
          </Title>
          <Slider>
            <RowPosters>
              {movies?.map((movie) => (
                <RowPoster
                  key={movie.id}
                  src={`${base_url}${movie.backdrop_path}`}
                  alt={movie.name}
                />
              ))}
            </RowPosters>
          </Slider>

      </RowContainer>
    );
}

export default Row;
