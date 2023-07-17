import React from 'react';

import Navbar from '../../components/elements/Navbar';
import Banner from '../../components/elements/Banner';
import Row from '../../components/elements/Row/Row';
import requests from '../../components/elements/Request';
import Footer from "../../components/elements/Footer/Footer";

function HomeScreen() {
  
  return (
    <div className='homeScreen'>
        <Navbar/>
        <Banner />

        <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />

        {/*<Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />*/}
        {/*<Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />*/}
        {/*<Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />*/}
        {/*<Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />*/}
        {/*<Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />*/}

        {/*<Footer />*/}
    </div>
  )
}

export default HomeScreen