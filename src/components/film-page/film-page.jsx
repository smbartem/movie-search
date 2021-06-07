import React from "react";
import styles from "./film-page.module.css";
import vector from "../images/vector.png";
import backgroundImageReserve from "../images/background.png";

const FilmPage = (props) => {
  const {
    data,
    makeFilmPageOpen,
    makeMainPageOpen,
    trailerLink,
    backgroundImageLink,
  } = props;

  return (
    <>
      <header className={styles.filmPageHeader}>
        <div className={styles.filmPageHeaderContainer}>
          <a
            href="/"
            className={styles.filmPageHeaderLink}
            onClick={makeMainPageOpen}
          >
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
        <section
          className={styles.filmPageFilmInfo}
          style={{
            backgroundImage: `linear-gradient(90.3deg, #111111 19%, rgba(17, 17, 17, 0) 99.75%), url("${
              backgroundImageLink ? backgroundImageLink : backgroundImageReserve
            }")`,
          }}
        >
          <div className={styles.filmPageMainContainer}>
            <div className={styles.filmPageFilmInfoContainer}>
              <h1 className={styles.filmPageTitle}>{data.title}</h1>
              <div className={styles.filmPageRatingContainer}>
                <div className={styles.filmRating}>IMDb {data.imDbRating}</div>
                <p className={styles.filmPageFilmInfoDescription}>
                  {data.type} | {data.genreList[0].value} | {data.year}
                </p>
              </div>
              <a
                href={trailerLink}
                className={styles.filmPageWatchLink}
                rel="noopener noreferrer"
                target="_blank"
              >
                Watch
              </a>
              <p className={styles.filmPageFilmInfoAwards}>{data.awards}</p>
            </div>
          </div>
        </section>
        <section>
          <div className={styles.filmPageMainContainer}>
            <div className={styles.filmPageAnnotation}>
              <h2 className={styles.filmPageAnnotationTitle}>
                Watch {data.title} on Richbee Shows
              </h2>
              <p className={styles.filmPageAnnotationText}>{data.plot}</p>
            </div>
          </div>
        </section>
        <section>
          <div className={styles.filmPageMainContainer}>
            <h3 className={styles.filmPageSimilarTitle}>You may also like</h3>
            <div className={styles.filmPageSimilarContainer}>
              <div
                className={styles.filmPageSimilarFilmContainer}
                style={{ backgroundImage: `url("${data.similars[0].image}")` }}
              ></div>
              <div
                className={styles.filmPageSimilarFilmContainer}
                style={{ backgroundImage: `url("${data.similars[1].image}")` }}
              ></div>
              <div
                className={styles.filmPageSimilarFilmContainer}
                style={{ backgroundImage: `url("${data.similars[2].image}")` }}
              ></div>
              <div
                className={styles.filmPageSimilarFilmContainer}
                style={{ backgroundImage: `url("${data.similars[3].image}")` }}
              ></div>
            </div>
          </div>
        </section>
      </main>
      <footer className={styles.filmPageFooter}>
        <a
          href="/"
          className={styles.filmPageFooterLink}
          onClick={makeMainPageOpen}
        >
          Richbee Shows
        </a>
      </footer>
    </>
  );
};

export default FilmPage;
