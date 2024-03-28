import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CardInterface from "../interfaces/card";
import { Link } from "react-router-dom";

interface CardProps {
  cardData: CardInterface;
}

const MyCard = ({ cardData }: CardProps) => {
  return (
    <Col xs={12} md={4} className="text-center g-2 mt-3 ">
      <Card className="h-100 bg-secondary ">
        <Card.Img variant="top" src={cardData.image_url} />
        <Card.Body className="d-flex flex-column ">
          <Card.Title>{cardData.title}</Card.Title>
          <Card.Text className="flex-grow-1">{cardData.published_at}</Card.Text>
          <Link to={`/card/${cardData.id}`}>
            <Button variant="dark">Dettagli</Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default MyCard;
