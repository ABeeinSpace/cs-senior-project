import Button from './button';
import Card from 'react-bootstrap/Card';
import 'src/app/page.module.css'

function Cards(props) {
  let options = props.code.split('newLine')
  return (
    <Card className = "mb-5" style={{ width: '100%' }}>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Title   className="text-left">{props.prompt}</Card.Title>
        <Card.Text className="text-left">
          <pre>
          <div className="options">
            {options.map((option) => (
            <>
            {" " + option} <br />
            </>
            ))}
          </div>
          </pre>


          
          
        </Card.Text>
        <Button id = {props.id} prompt = {props.prompt} object = {props.object} codeSelector = {props.codeSelector} />
      </Card.Body>
    </Card>
  );
}

export default Cards;