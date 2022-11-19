import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useLocation, Link } from "react-router-dom";
import styles from "./charId.module.css";

const CharIdPage = () => {
  const location = useLocation();
  const id = location.pathname.split("/");

  const [character, setCharacter] = useState({});
  const [loading, setLoading] = useState(true);

  const url = "https://www.breakingbadapi.com/api/characters";

  useEffect(() => {
    Axios.get(`${url}/${id[2]}`).then((response) =>
      setCharacter(response.data[0])
    );
    setLoading(false);
  }, []);

  return (
    <div>
      {loading && <p>Loading...</p>}
      <h3>{character.nickname}</h3>

      <img src={character.img} alt={character.name} className={styles.image} />
      <br />

      <Link to="/">Volver a Inicio</Link>
    </div>
  );
};

export default CharIdPage;
