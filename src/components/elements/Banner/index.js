import axios from '../axios';
import React, { useEffect, useState } from 'react';
import requests from '../Request';
import {
  BannerDiv,
  BannerContents,
  BannerLogoText,
  BannerTitle,
  BannerSynopsis,
  BannerFadeBottom,
  BannerButtons,
  BannerButton,
  BannerButtonSpan,
  BannerEmbedded,
  MaturityRating,
  MaturityNumber
} from "./Style";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchTrending);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
          ]
      );
      return request;
    }

    fetchData();
  }, []);

  function truncate(string, n) {
    return string.length > n ? string.substr(0, n - 1) + '...' : string;
  }

  return (
    <>
      <BannerDiv
        style={{
          backgroundSize: 'cover',
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
          backgroundPosition: 'center center',
        }}
      >
        <BannerContents>
          <BannerLogoText>
            <BannerTitle>
              {movie?.title || movie?.name || movie?.original_name}
            </BannerTitle>
            <BannerSynopsis>
              {truncate(`${movie?.overview}`, 200)}
            </BannerSynopsis>
            <BannerButtons>
              <BannerButton className="play">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="ltr-0 e1mhci4z1"
                  data-name="Play"
                  aria-hidden="true"
                >
                  <path
                    d="M4 2.69127C4 1.93067 4.81547 1.44851 5.48192 1.81506L22.4069 11.1238C23.0977 11.5037 23.0977 12.4963 22.4069 12.8762L5.48192 22.1849C4.81546 22.5515 4 22.0693 4 21.3087V2.69127Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <BannerButtonSpan>Play</BannerButtonSpan>
              </BannerButton>

              <BannerButton className="info">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="ltr-0 e1mhci4z1"
                  data-name="Info"
                  aria-hidden="true"
                >
                  <path
                    d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM13 10V18H11V10H13ZM12 8.5C12.8284 8.5 13.5 7.82843 13.5 7C13.5 6.17157 12.8284 5.5 12 5.5C11.1716 5.5 10.5 6.17157 10.5 7C10.5 7.82843 11.1716 8.5 12 8.5Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <BannerButtonSpan>More info</BannerButtonSpan>
              </BannerButton>
            </BannerButtons>
          </BannerLogoText>
        </BannerContents>
        <BannerFadeBottom/>

        <BannerEmbedded>
          {/*<ActionButton>*/}
          {/*  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"*/}
          {/*       className="ltr-0 e1mhci4z1" data-name="Refresh" aria-hidden="true">*/}
          {/*    <path fill-rule="evenodd" clip-rule="evenodd"*/}
          {/*          d="M13.1747 3.07702C11.01 2.79202 8.81537 3.30372 6.99988 4.51679C5.18439 5.72987 3.8718 7.56158 3.30668 9.67065C2.74155 11.7797 2.96243 14.0223 3.92815 15.9806C4.89388 17.9389 6.53859 19.4794 8.55586 20.3149C10.5731 21.1505 12.8254 21.2242 14.893 20.5224C16.9606 19.8205 18.7025 18.391 19.7942 16.5L18.0622 15.5C17.2131 16.9708 15.8582 18.0826 14.2501 18.6285C12.642 19.1744 10.8902 19.1171 9.32123 18.4672C7.75224 17.8173 6.47302 16.6192 5.7219 15.096C4.97078 13.5729 4.79899 11.8287 5.23853 10.1883C5.67807 8.5479 6.69897 7.12324 8.11102 6.17973C9.52307 5.23623 11.23 4.83824 12.9137 5.05991C14.5974 5.28158 16.1432 6.10778 17.2629 7.3846C18.1815 8.43203 18.762 9.7241 18.9409 11.0921L17.5547 10.168L16.4453 11.8321L19.4453 13.8321C19.7812 14.056 20.2188 14.056 20.5547 13.8321L23.5547 11.8321L22.4453 10.168L20.9605 11.1578C20.784 9.27909 20.0201 7.49532 18.7666 6.06591C17.3269 4.42429 15.3395 3.36202 13.1747 3.07702Z"*/}
          {/*          fill="currentColor"></path>*/}
          {/*  </svg>*/}
          {/*</ActionButton>*/}
          <MaturityRating>
            <MaturityNumber>TV-MA</MaturityNumber>
          </MaturityRating>

        </BannerEmbedded>
      </BannerDiv>
    </>
  );
}

export default Banner;
