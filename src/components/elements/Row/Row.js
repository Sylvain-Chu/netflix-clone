import axios from '../axios';
import React, { useEffect, useState, useCallback } from 'react';
import { RowContainer, Title, RowPosters, Slider, TitleLink } from './Style';
import RowPoster from "../RowPoster";

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
                  movie={movie}
                  mouseOver={true}
                />
              ))}
            </RowPosters>
          </Slider>

      </RowContainer>
    );
}

export default Row;
