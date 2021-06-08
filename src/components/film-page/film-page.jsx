import React from "react";
import RatingLabel from "../rating-label/rating-label";
import SimilarFilm from "./film-page-similar"
import styles from "./film-page.module.css";
import vector from "../images/vector.png";
import backgroundImageReserve from "../images/background.png";

const FilmPage = (props) => {
  const {
    data,
    makeMainPageOpen,
    trailerLink,
    backgroundImageLink,
    inputText,
    handleInput,
    handleSubmit,
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
          <form onSubmit={handleSubmit}>
            <div
              className={styles.filmPageHeaderSearch}
              onSubmit={handleSubmit}
            >
              <button type="submit" className={styles.filmPageHeaderButton}>
                <img
                  alt="searching"
                  src={vector}
                  className={styles.filmPageHeaderLogo}
                />{" "}
              </button>
              <input
                className={styles.filmPageHeaderInput}
                placeholder="Type here smth..."
                value={inputText}
                onChange={handleInput}
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
                <RatingLabel imDbRating={data.imDbRating} />
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
              <SimilarFilm data={data.similars[0]}/>
              <SimilarFilm data={data.similars[1]}/>
              <SimilarFilm data={data.similars[2]}/>
              <SimilarFilm data={data.similars[3]}/>
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
