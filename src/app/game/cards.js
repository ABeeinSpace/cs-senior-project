import Button from './button';
import Card from 'react-bootstrap/Card';
import 'src/app/page.module.css'

function Cards(props) {

  return (
    <Card  className="text-center" style={{ width: '100%' }}>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Title>{props.prompt}</Card.Title>
        <Card.Text>
          {props.code}
        </Card.Text>
        <Button id = {props.id} prompt = {props.prompt} object = {props.object} codeSelector = {props.codeSelector} />
      </Card.Body>
    </Card>
  );
}

export default Cards;