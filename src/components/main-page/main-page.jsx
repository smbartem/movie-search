import React from "react";
import FilmOutput from "../film-output/film-output";
import styles from "./main-page.module.css";

const Main = (props) => {
  const {
    toggleMainPageOpen,
    toggleFilmOutputOpen,
    toggleFilmPageOpen,
    isFilmOutputOpen,
  } = props;
  return (
    <>
      <main className={styles.mainPage}>
        <div className={styles.container}>
          <h1 className={styles.title}>
            Unlimited movies, TV shows, and more.
          </h1>
          <h2 className={styles.subTitle}>Watch anywhere. Cancel anytime.</h2>
          <form>
            <div className={styles.search}>
              <input className={styles.input} placeholder="Type here smth..." />
              <input className={styles.submit} type="submit" value="Search" />
            </div>
          </form>
        </div>
        {isFilmOutputOpen && <FilmOutput />}
      </main>
    </>
  );
};

export default Main;
