import React, { useState } from "react";
import Main from "../main-page/main-page";
import FilmPage from "../film-page/film-page";

const key = 'k_eb9xmxgq';

const App = () => {
  const [isMainPageOpen, setMainPageOpen] = useState(true);
  const [isFilmOutputOpen, setFilmOutputOpen] = useState(false);
  const [isFilmPageOpen, setFilmPageOpen] = useState(false);
  const [inputText, setInputText] = useState("");
  const [data, setData] = useState(null);
  const [trailerLink, setTrailerLink] = useState(null);
  const [backgroundImageLink, setBackgroundImageLink] = useState(null);
  const [error, setError] = useState(null);

  const makeFilmPageOpen = (e) => {
    e.preventDefault();
    setMainPageOpen(false);
    setFilmOutputOpen(false);
    setFilmPageOpen(true);
    setInputText("")
  };

  const makeMainPageOpen = (e) => {
    e.preventDefault();
    setFilmPageOpen(false);
    setFilmOutputOpen(false);
    setMainPageOpen(true);
    setInputText("")
  };

  const handleInput = (e) => setInputText(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    const getIdUrl = new URL(
      inputText,
      `https://imdb-api.com/en/API/Search/${key}/`
    );
    fetch(getIdUrl)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(`Ошибка: ${response.status}`);
      })
      .then((res) => {
        if (res["errorMessage"]) {
          return Promise.reject(`Ошибка: ${res.errorMessage}`);
        }
        const getDataUrl = new URL(
          res.results[0].id,
          `https://imdb-api.com/en/API/Title/${key}/`
        );
        const getTrailerUrl = new URL(
          res.results[0].id,
          `https://imdb-api.com/en/API/Trailer/${key}/`
        );
        const getImageUrl = new URL(
          `${res.results[0].id}/Short`,
          `https://imdb-api.com/en/API/Images/${key}/`
        );

        fetch(getTrailerUrl.href)
          .then((response) => {
            if (response.ok) {
              return response.json();
            }
            return Promise.reject(`Error: ${response.status}`);
          })
          .then((res) =>
            res["errorMessage"]
              ? setTrailerLink(null)
              : setTrailerLink(res.link)
          )
          .catch((err) => setError(`${err}`));
        fetch(getImageUrl.href)
          .then((response) => {
            if (response.ok) {
              return response.json();
            }
            return Promise.reject(`Error: ${response.status}`);
          })
          .then((res) =>
            res["errorMessage"]
              ? setBackgroundImageLink(null)
              : setBackgroundImageLink(res.items[0].image)
          )
          .catch((err) => setError(`${err}`));
        fetch(getDataUrl.href)
          .then((response) => {
            if (response.ok) {
              return response.json();
            }
            return Promise.reject(`Error: ${response.status}`);
          })
          .then((res) =>
            res["errorMessage"]
              ? Promise.reject(`Error: ${res.errorMessage}`)
              : setData(res)
          )
          .then(() => setFilmOutputOpen(true))
          .then(() => setInputText(""))
          .catch((err) => setError(`${err}`));
      })
      .catch((err) => setError(`${err}`));
  };

  return (
    <>
      {error && (
        <p>{`${error}. Try to reload the page or check the connection.`}</p>
      )}
      {isMainPageOpen && (
        <Main
          isFilmOutputOpen={isFilmOutputOpen}
          inputText={inputText}
          handleInput={handleInput}
          handleSubmit={handleSubmit}
          data={data}
          makeFilmPageOpen={makeFilmPageOpen}
        />
      )}
      {isFilmPageOpen && (
        <FilmPage
          data={data}
          makeMainPageOpen={makeMainPageOpen}
          trailerLink={trailerLink}
          backgroundImageLink={backgroundImageLink}
          inputText={inputText}
          handleInput={handleInput}
          handleSubmit={handleSubmit}
        />
      )}
    </>
  );
};

export default App;
