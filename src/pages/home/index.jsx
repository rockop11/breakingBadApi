import { useEffect, useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import { Card } from "../../components/card";

const HomePage = () => {
  const url = "https://breakingbadapi.com/api";

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    Axios.get(`${url}/characters`)
      .then((response) => setCharacters(response.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h2>Characters List</h2>

      {!characters && <p>Loading...</p>}

      <div className="char-list">
        {characters.map((char) => {
          return (
            <div key={char.char_id}>
              <Link to={`/character/${char.char_id}`}>
                <Card character={char} />
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default HomePage;
