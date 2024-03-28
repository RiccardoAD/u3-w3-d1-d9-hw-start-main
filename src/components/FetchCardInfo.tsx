import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import CardInterface from "../interfaces/card";

const FetchCardInfo = () => {
  const { id } = useParams<{ id: string }>();
  const [card, setCard] = useState<CardInterface | null>(null);

  const fetchCardInfo = async () => {
    try {
      const response = await fetch(
        `https://api.spaceflightnewsapi.net/v4/articles/${id}`
      );
      if (response.ok) {
        const cardInfo = await response.json();
        console.log(cardInfo);
        setCard(cardInfo);
      } else {
        throw new Error("Errore nel recupero della card");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCardInfo();
  }, [id]);

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={6} className="text-center">
          <h1 className=" text-white ">Dettagli Notizia:</h1>
        </Col>
      </Row>
      <Row className="justify-content-center">
        {card && (
          <Col xs={12} md={4} className="text-center mt-3">
            <Card className=" bg-secondary ">
              <Card.Img variant="top" src={card.image_url} />
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.news_site}</Card.Text>
                <Card.Text>{card.summary}</Card.Text>
                <Card.Text>{card.published_at}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default FetchCardInfo;
