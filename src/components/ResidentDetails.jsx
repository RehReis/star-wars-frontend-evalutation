import { useLocation } from 'react-router-dom';
import {Card, Container} from 'react-bootstrap';

export default function ResidentDetails() {
  const location = useLocation();
  let {residentDetails} = location.state;

  return (
    <Container className="p-3">
      <Container className="p-5">
        <Card style={{ width: '30rem' }} bg="warning">
          <Card.Title>{residentDetails.name}</Card.Title>
          <Container>
            <ul>Birth-Year: {residentDetails.birth_year}</ul>
            <ul>Gender: {residentDetails.gender}</ul>
            <ul>Eye-Color: {residentDetails.eye_color}</ul>
            <ul>Hair-Color: {residentDetails.hair_color}</ul>
            <ul>Height: {residentDetails.height}</ul>
            <ul>Mass: {residentDetails.mass}</ul>
            <ul>Skin-Color: {residentDetails.skin_color}</ul>
          </Container>
        </Card>
    </Container>
    </Container>
  )
}