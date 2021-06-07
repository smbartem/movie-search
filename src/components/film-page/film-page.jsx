import React from "react";
import styles from "./film-page.module.css";
import vector from "../images/vector.png";

const FilmPage = () => {
  return (
    <>
      <header className={styles.filmPageHeader}>
        <div className={styles.filmPageHeaderContainer}>
          <a href="/" className={styles.filmPageHeaderLink}>
            Richbee Shows
          </a>
          <form>
            <div className={styles.filmPageHeaderSearch}>
              <input
                type="image"
                alt="searching"
                src={vector}
                className={styles.filmPageHeaderImage}
              />
              <input
                className={styles.filmPageHeaderInput}
                placeholder="Type here smth..."
              />
            </div>
          </form>
        </div>
      </header>
      <main>
        <section className={styles.filmPageFilmInfo}>
          <div className={styles.filmPageMainContainer}>
            <div className={styles.filmPageFilmInfoContainer}>
              <h1 className={styles.filmPageTitle}>The Queen's Gambit</h1>
              <div className={styles.filmPageRatingContainer}>
                <div className={styles.filmRating}>IMDb 8.8</div>
                <p className={styles.filmPageFilmInfoDescription}>
                  TVSeries | Drama | 2020
                </p>
              </div>
              <a href="/" className={styles.filmPageWatchLink}>
                Watch
              </a>
              <p className={styles.filmPageFilmInfoAwards}>
                Top Rated TV #148 | Won 2 Golden Globes. <br />
                Another 12 wins & 19 nominations.
              </p>
            </div>
          </div>
        </section>
        <section>
          <div className={styles.filmPageMainContainer}>
            <div className={styles.filmPageAnnotation}> 
              <h2 className={styles.filmPageAnnotationTitle}>Watch The Queen's Gambit on Richbee Shows</h2>
              <p className={styles.filmPageAnnotationText}>
                Nine year-old orphan Beth Harmon is quiet, sullen, and by all
                appearances unremarkable. That is, until she plays her first
                game of chess. Her senses grow sharper, her thinking clearer,
                and for the first time in her life she feels herself fully in
                control. By the age of sixteen, she's competing for the U.S.
                Open championship. But as Beth hones her skills on the
                professional circuit, the stakes get higher, her isolation grows
                more frightening, and the thought of escape becomes all the more
                tempting. Based on the book by Walter Tevis.
              </p>
            </div>
          </div>
        </section>
        <section>
          <div className={styles.filmPageMainContainer}>
            <h3 className={styles.filmPageSimilarTitle}>You may also like</h3>
            <div className={styles.filmPageSimilarContainer}>
              <div className={styles.filmPageSimilarFilmContainer}></div>
              <div className={styles.filmPageSimilarFilmContainer}></div>
              <div className={styles.filmPageSimilarFilmContainer}></div>
              <div className={styles.filmPageSimilarFilmContainer}></div>
            </div>
          </div>
        </section>
      </main>
      <footer className={styles.filmPageFooter}>
        <a href="/" className={styles.filmPageFooterLink}>
          Richbee Shows
        </a>
      </footer>
    </>
  );
};

export default FilmPage;
