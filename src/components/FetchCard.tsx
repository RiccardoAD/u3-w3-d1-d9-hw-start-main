import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardInterface from "../interfaces/card";
import MyCard from "./MyCard";

const FetchCard = () => {
  const [cards, setCards] = useState<CardInterface[]>([]);

  const fetchCard = async () => {
    try {
      const response = await fetch(
        "https://api.spaceflightnewsapi.net/v4/articles"
      );
      if (response.ok) {
        const arrayOfCards = await response.json();
        console.log(arrayOfCards);
        setCards(arrayOfCards.results);
      } else {
        throw new Error("ERRORE RECUOPER CARD");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCard();
  }, []);

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={6} className="text-center">
          <h1 className=" text-white ">Info Notizie:</h1>
        </Col>
      </Row>
      <Row className="justify-content-center">
        {cards.map((singleCard) => (
          <MyCard cardData={singleCard} key={singleCard.id} />
        ))}
      </Row>
    </Container>
  );
};

export default FetchCard;
