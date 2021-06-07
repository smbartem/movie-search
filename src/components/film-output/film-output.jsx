import React from "react";
import styles from "./film-output.module.css";

const FilmOutput = (props) => {
  const { data, makeFilmPageOpen } = props;
  return (
    <div className={styles.FilmOutput} onClick={makeFilmPageOpen}>
      <div className={styles.filmContainer}>
      <img alt="film poster" src={data.image} className={styles.filmContainerLogo}/>
      <div className={styles.filmInfo}>
        <div className={styles.filmInfoHeader}>
          <h2 className={styles.filmInfoTitle}>{data.title}</h2>
          <div className={styles.filmRating}>IMDb {data.imDbRating}</div>
        </div>
        <div className={styles.filmDescription}>
          <p className={styles.filmInfoText}>{data.type} | {data.genreList[0].value} | {data.year}</p>
        </div>
        <hr />
        <div className={styles.filmInfoContainer}>
          <p className={styles.filmInfoText}>
            {data.awards}
          </p>
        </div>
      </div>
    </div>
    </div>
  )
};

export default FilmOutput;