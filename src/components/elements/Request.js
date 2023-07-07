const API_KEY = "aa50dbf3381ae006f0be8941e5a4c5af";

const requests = {
    fetchTrending : `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-CA`,
    
    fetchTopRated : `/movie/top_rated?api_key=${API_KEY}&language=en-CA`,

    fetchActionMovies : `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies : `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies : `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies : `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries : `/discover/movie?api_key=${API_KEY}&with_genres=99`,
}


export default requests;