import React from "react";
import styles from "./card.module.css";

export const Card = ({ character }) => {
  return (
    <div className={styles.cardContainer}>
      <img src={character.img} alt={character.name} />
      <div className={styles.info}>
        <h3 className={styles.name}>{character.name}</h3>
        <p className={styles.nickname}>{character.nickname}</p>
      </div>
    </div>
  );
};
