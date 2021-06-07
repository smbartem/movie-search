import React, { useState } from "react";
import Main from "../main-page/main-page";
import FilmPage from "../film-page/film-page";

const App = () => {
  const [isMainPageOpen, setMainPageOpen] = useState(true);
  const [isFilmOutputOpen, setFilmOutputOpen] = useState(false);
  const [isFilmPageOpen, setFilmPageOpen] = useState(false);

  const toggleMainPageOpen = () => setMainPageOpen(!isMainPageOpen);
  const toggleFilmOutputOpen = () => setFilmOutputOpen(!isFilmOutputOpen);
  const toggleFilmPageOpen = () => setFilmPageOpen(!isFilmOutputOpen);

  return (
    <>
      {isMainPageOpen && (
        <Main
          toggleMainPageOpen={toggleMainPageOpen}
          toggleFilmOutputOpen={toggleFilmOutputOpen}
          toggleFilmPageOpen={toggleFilmPageOpen}
          isFilmOutputOpen={isFilmOutputOpen}
        />
      )}
      {isFilmPageOpen && (
        <FilmPage
          toggleMainPageOpen={toggleMainPageOpen}
          toggleFilmOutputOpen={toggleFilmOutputOpen}
          toggleFilmPageOpen={toggleFilmPageOpen}
        />
      )}
    </>
  );
};

export default App;
