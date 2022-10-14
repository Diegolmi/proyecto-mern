import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Button } from "react-bootstrap";
import ImgBurger from "../../imagenes/begieArg.jpg";

const CardsEcommerce = () => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [paginacion, setPaginacion] = useState();

  useEffect((limit = 10, offset = 0) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
      .then((res) => {
        const getPokemonData = async (item) => {
          return axios.get(item.url);
        };
        const getAllPokemonData = async () => {
          return Promise.all(
            res.data.results.map(async (item) => {
              item.details = (await getPokemonData(item)).data;
              console.log(item);
              return item;
            })
          );
        };
        getAllPokemonData().then((data) => {
          setPokemon(data);
        });
      });
  }, []);

  return (
    <>
      {pokemon.map((pokemon) => {
        return (
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={ImgBurger} />
            <Card.Body>
              <Card.Title>{pokemon.name}</Card.Title>
              <Card.Text>
                {pokemon.details.types.map((type) => {
                    return <p>{type.type.name}</p>;
                })}
            
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        );
      })}
    </>
  );
};

export default CardsEcommerce;
