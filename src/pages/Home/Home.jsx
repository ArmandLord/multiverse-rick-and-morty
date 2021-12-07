import { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [all, setAll] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let i = 1;
      const allChracters = [];
      while (i <= 42) {
        const data = await axios.get(
          `https://rickandmortyapi.com/api/character/?page=${i}`
        );
        allChracters.push(data.data.results);
        i++;
      }
      setAll(allChracters.flat());
    }
    fetchData();
  }, []);

  const planet = all.filter(item => item.location.name === "Planet Squanch");

  console.log(all);
  console.log(planet);
  return (
    <>
      <div>
        {planet.map((item) => (<img key={item.id} src={item.image} alt={item.name}/>))}
      </div>
    </>
  );
};

export default Home;

