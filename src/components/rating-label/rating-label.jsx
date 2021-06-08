import React from "react";
import styles from "./rating-label.module.css";

const RatingLabel = (props) => <div className={styles.filmRating}>IMDb {props.imDbRating}</div>;

export default RatingLabel;