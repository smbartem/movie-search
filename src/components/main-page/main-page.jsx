import React from "react";
import FilmOutput from "../film-output/film-output";
import styles from "./main-page.module.css";

const Main = (props) => {
  const {
    isFilmOutputOpen,
    inputText,
    handleInput,
    handleSubmit,
    data,
    makeFilmPageOpen,
  } = props;
  return (
    <>
      <main className={styles.mainPage} >
        <div className={styles.container}>
          <h1 className={styles.title}>
            Unlimited movies, TV shows, and more.
          </h1>
          <h2 className={styles.subTitle}>Watch anywhere. Cancel anytime.</h2>
          <form onSubmit={handleSubmit}>
            <div className={styles.search}>
              <input className={styles.input} placeholder="Type here smth..." value={inputText} onChange={handleInput}/>
              <input className={styles.submit} type="submit" value="Search" />
            </div>
          </form>
        </div>
        {isFilmOutputOpen && <FilmOutput data={data} makeFilmPageOpen={makeFilmPageOpen}/>}
      </main>
    </>
  );
};

export default Main;
