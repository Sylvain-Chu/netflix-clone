import axios from './axios';
import React, { useEffect, useState, useCallback } from 'react';
import './Row.css';

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

    console.log(movies);

    return (
        <div className='row'>
            <h2>{title}</h2>

            <div className="row__posters">
                {movies?.map((movie) => (
                    <img
                        className={`row__poster`}
                        key={movie.id}
                        src={`${base_url}${movie.backdrop_path}`}
                        alt={movie.name}
                    />
                ))}
            </div>
        </div>
    );
}

export default Row;
