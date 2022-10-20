import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Button, Row, Col, Container } from "react-bootstrap";
import "./styleCards.css";
import { useNavigate } from "react-router-dom";

const CardsEcommerce = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

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
              // console.log(item.details);
              return item;
            })
          );
        };
        getAllPokemonData().then((data) => {
          setPokemons(data);
          setLoading(false);

        });
      });
  }, []);

  console.log(pokemons, "pokemons");
  return (
    <>
      <Container>
        <Row>
          
          {loading  ? (
            
            <h1>Cargando Pokemon.........</h1>
          ) : (
            <>
              {pokemons.map((pokemon) => {
                return (
                  <Col xs={8} md={6} xl={3}>
                    <Card className="cardsPokemon">
                      <Card.Img
                        variant="top"
                        src={pokemon.details.sprites.front_default}
                      />
                      <Card.Body>
                        <Card.Title>{pokemon.name}</Card.Title>
                        <Card.Text>
                          {pokemon.details.types.map((type) => {
                            return <p>{type.type.name}</p>;
                          })}
                        </Card.Text>
                        <Button
                          variant="primary"
                          onClick={() => navigate("/detalles-productos")}
                        >
                          Ver detalles
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })}
            </>
          )}
        </Row>
      </Container>
    </>
  );
};

export default CardsEcommerce;
