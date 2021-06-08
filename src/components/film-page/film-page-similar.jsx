import React, { useState } from "react";
import RatingLabel from "../rating-label/rating-label";
import styles from "./film-page.module.css";

const SimilarFilm = (props) => {
  const { image, title, genres, year, plot, imDbRating } = props.data;
  const [focus, setFocus] = useState(false);
  const display = {display: "none"};
  let background = {backgroundImage: `url("${image}")`};

  if (focus) {
    display.display = "block";
    background.backgroundImage = `linear-gradient(0deg, rgba(20, 19, 19, 0.85), rgba(20, 19, 19, 0.85)), url("${image}")`;
  } else {
    display.display = "none";
    background.backgroundImage = `url("${image}")`;
  }

  const enterFocus = () => setFocus(true);
  const leaveFocus = () => setFocus(false);

  return (
    <div
      className={styles.filmPageSimilarFilmContainer}
      style={background}
      onMouseEnter={enterFocus}
      onMouseLeave={leaveFocus}
    >
      <div className={styles.filmPageSimilarFilmInnerContainer} style={display}>
        <h3 className={styles.filmPageSimilarFilmTitle}>{title}</h3>
        <p className={styles.filmPageSimilarFilmInfo}>{genres}</p>
        <p className={styles.filmPageSimilarFilmInfo}>{year}</p>
        <p className={styles.filmPageSimilarFilmDescription}>{plot}</p>
        <RatingLabel imDbRating={imDbRating} />
      </div>
    </div>
  );
};

export default SimilarFilm;
