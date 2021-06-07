import React from "react";
import styles from "./film-output.module.css";
import filmImage from "../images/film-image.png";

const FilmOutput = () => {
  return (
    <div className={styles.FilmOutput}>
      <div className={styles.filmContainer}>
      <img alt="film poster" src={filmImage} />
      <div className={styles.filmInfo}>
        <div className={styles.filmInfoHeader}>
          <h2 className={styles.filmInfoTitle}>The Queen's Gambit</h2>
          <div className={styles.filmRating}>IMDb 8.8</div>
        </div>
        <div className={styles.filmDescription}>
          <p className={styles.filmInfoText}>TVSeries | Drama | 2020</p>
        </div>
        <hr />
        <div>
          <p className={styles.filmInfoText}>
            Top Rated TV #148 | Won 2 Golden Globes. <br />
            Another 12 wins & 19 nominations.
          </p>
        </div>
      </div>
    </div>
    </div>
  )
};

export default FilmOutput;