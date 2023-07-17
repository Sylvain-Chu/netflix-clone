import axios from '../axios';
import React, {useEffect, useState, useCallback} from 'react';
import {RowContainer, Title, RowPosters, Slider, TitleLink} from './Style';
import RowPoster from "../RowPoster";
import './style.css';

function Row({title, fetchUrl}) {
  const [movies, setMovies] = useState();
  const base_url = "https://image.tmdb.org/t/p/original/";

  const fetchData = useCallback(async () => {
    const request = await axios.get(fetchUrl);
    setMovies(request.data.results);
    return request;
  }, [fetchUrl]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results);
      } catch (error) {
        console.log(error.message());
      }
    };

    fetchData();
  }, [fetchUrl]);

  document.addEventListener("click", e => {
    let handle
    if (e.target.matches(".handle")) {
      handle = e.target
    } else {
      handle = e.target.closest(".handle")
    }
    if (handle != null) onHandleClick(handle)
  })

  const throttleProgressBar = throttle(() => {
    document.querySelectorAll(".progress-bar").forEach(calculateProgressBar)
  }, 250)
  window.addEventListener("resize", throttleProgressBar)

  document.querySelectorAll(".progress-bar").forEach(calculateProgressBar)

  function calculateProgressBar(progressBar) {
    progressBar.innerHTML = ""
    const slider = progressBar.closest(".row").querySelector(".slider");
    const itemCount = slider.children.length
    const itemsPerScreen = parseInt(
      getComputedStyle(slider).getPropertyValue("--items-per-screen")
    )
    let sliderIndex = parseInt(
      getComputedStyle(slider).getPropertyValue("--slider-index")
    )
    const progressBarItemCount = Math.ceil(itemCount / itemsPerScreen)

    if (sliderIndex >= progressBarItemCount) {
      slider.style.setProperty("--slider-index", progressBarItemCount - 1)
      sliderIndex = progressBarItemCount - 1
    }

    for (let i = 0; i < progressBarItemCount; i++) {
      const barItem = document.createElement("div")
      barItem.classList.add("progress-item")
      if (i === sliderIndex) {
        barItem.classList.add("active")
      }
      progressBar.append(barItem)
    }
  }

  function onHandleClick(handle) {
    const progressBar = handle.closest(".row").querySelector(".progress-bar")
    const slider = handle.closest(".container").querySelector(".slider")
    const sliderIndex = parseInt(
      getComputedStyle(slider).getPropertyValue("--slider-index")
    )
    const progressBarItemCount = progressBar.children.length
    if (handle.classList.contains("left-handle")) {
      if (sliderIndex - 1 < 0) {
        slider.style.setProperty("--slider-index", progressBarItemCount - 1)
        progressBar.children[sliderIndex].classList.remove("active")
        progressBar.children[progressBarItemCount - 1].classList.add("active")
      } else {
        slider.style.setProperty("--slider-index", sliderIndex - 1)
        progressBar.children[sliderIndex].classList.remove("active")
        progressBar.children[sliderIndex - 1].classList.add("active")
      }
    }

    if (handle.classList.contains("right-handle")) {
      if (sliderIndex + 1 >= progressBarItemCount) {
        slider.style.setProperty("--slider-index", 0)
        progressBar.children[sliderIndex].classList.remove("active")
        progressBar.children[0].classList.add("active")
      } else {
        slider.style.setProperty("--slider-index", sliderIndex + 1)
        progressBar.children[sliderIndex].classList.remove("active")
        progressBar.children[sliderIndex + 1].classList.add("active")
      }
    }
  }

  function throttle(cb, delay = 1000) {
    let shouldWait = false
    let waitingArgs
    const timeoutFunc = () => {
      if (waitingArgs == null) {
        shouldWait = false
      } else {
        cb(...waitingArgs)
        waitingArgs = null
        setTimeout(timeoutFunc, delay)
      }
    }

    return (...args) => {
      if (shouldWait) {
        waitingArgs = args
        return
      }

      cb(...args)
      shouldWait = true
      setTimeout(timeoutFunc, delay)
    }
  }

  return (
    <div className="row">
      <div className="header">
        <h3 className="title">{title}</h3>
        <div className="progress-bar"></div>
      </div>


      <div className="container">
        <button className="handle left-handle">
          <div className="text">&#8249;</div>
        </button>
        <div className="slider">
          {movies?.map((movie) => (
            <img
              key={movie.id}
              src={`${base_url}${movie.backdrop_path}`}
            />
          ))}
        </div>
        <button className="handle right-handle">
          <div className="text">&#8250;</div>
        </button>
      </div>
    </div>
    // <RowContainer>
    //   <Title>
    //     <TitleLink>
    //       {title}
    //     </TitleLink>
    //     {/*<ExploreFade>*/}
    //     {/*<SeeAllLink>*/}
    //     {/*  See All*/}
    //     {/*</SeeAllLink>*/}
    //     {/*</ExploreFade>*/}
    //   </Title>
    //
    //
    //   {/*<Slider>*/}
    //   {/*  <RowPosters>*/}

    //   {/*  </RowPosters>*/}
    //   {/*</Slider>*/}
    //
    // </RowContainer>
  );
}

export default Row;
