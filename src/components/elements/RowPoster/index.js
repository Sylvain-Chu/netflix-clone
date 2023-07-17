import { Age, Card, Info, Match, PosterBackground, Tags, Time, Title } from "./Style";

function RowPoster({ movie, isLargeRow, mouseOver }) {
  const base_url = "https://image.tmdb.org/t/p/original/";

  function toggleHover(event) {
    const element = event.currentTarget;
    element.classList.toggle("hover");

    var scaleFactor = 1.8;
    var wBigElement = element.offsetWidth * scaleFactor;
    var translation = (wBigElement - element.offsetWidth) / 2;

    var item = element.parentElement.children;

    element.style.transform = "scale(" + scaleFactor + ")";

    if (element.matches(":nth-child(1)")) {
      Array.from(item)
        .slice(1, item.length)
        .forEach(function (element) {
          element.style.transform = "translate(" + translation * 2 + "px, 0px)";
        });
    }

    for (var i = 2; i <= item.length - 1; i++) {
      if (element.matches(":nth-child(" + i + ")")) {
        Array.from(item)
          .slice(0, i - 1)
          .forEach(function (element) {
            element.style.transform = "translate(-" + translation + "px, 0px)";
          });
        Array.from(item)
          .slice(i)
          .forEach(function (element) {
            element.style.transform = "translate(" + translation + "px, 0px)";
          });
      }
    }

    if (element.matches(":nth-child(" + item.length + ")")) {
      Array.from(item)
        .slice(0, item.length - 1)
        .forEach(function (element) {
          element.style.transform = "translate(-" + translation * 2 + "px, 0px)";
        });
    }
  }

  function toggleHoverOut(event) {
    const element = event.currentTarget;
    element.classList.toggle("hover");
    element.style.transform = "scale(1)";
    Array.from(document.querySelectorAll("li")).forEach(function (element) {
      if (!element.isSameNode(this)) {
        element.style.transform = "translate(0px, 0px)";
      }
    });
  }

  return (
    <>
      <PosterBackground
        key={movie.id}
        src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
        alt={movie.name}
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHoverOut}
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
