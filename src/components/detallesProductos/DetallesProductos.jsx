import React, { useState, useEffect } from "react";
import { CardGroup, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import * as API from "../../services/ApiPokemon";

const DetallesProductos = () => {
  const [detallePokemon, setDetallePokemon] = useState({});
  const [loading, setLoading] = useState(true);
  const { pokemonId } = useParams();

  useEffect(() => {
    API.getIdPokemon(pokemonId)
      .then((res) => setDetallePokemon(res), setLoading(false))
      .catch((err) => console.error(err));
  }, [pokemonId]);

console.log(detallePokemon.sprites.front_shiny, "detallePokemon");
  return (

    <>
      {loading ? (
        <h1>Cargando Pokemon.........</h1>
      ) : (
        <CardGroup>
          <Card key={detallePokemon.id}>
            <Card.Img
              variant="top"
              src={detallePokemon.sprites.front_default}
            />
            <Card.Body>
              <Card.Title>{detallePokemon.name}</Card.Title>
              {/* <Card.Text>
                {detallePokemon.details.types.map((tipo) => {
                  return (
                    <>
                      <p>{tipo.type.name}</p>
                      <p>{tipo.type.url}</p>
                    </>
                  );
                })}
              </Card.Text> */}
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to
                additional content.{" "}
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      )}
    </>
  );
};

export default DetallesProductos;
