import Button from './button';
import Card from 'react-bootstrap/Card';

function BasicExample() {
  return (
    <Card className="text-center" style={{ width: '100%' }}>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Title>Prompt</Card.Title>
        <Card.Text>
          Code will go here
        </Card.Text>
        <Button />
      </Card.Body>
    </Card>
  );
}

export default BasicExample;