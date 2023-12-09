import Button from './button';
import Card from 'react-bootstrap/Card';
import '../app/page.module.css'
import { useState, useRef} from 'react';

function Cards(props) {

  const [bgColor, setBgColor] = useState('white');
  let options = props.code.split('newLine')
  return (
    <Card  className = "mb-5" style={{ width: '100%', backgroundColor: bgColor}}>
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
        <Button id = {props.id} prompt = {props.prompt} object = {props.object} codeSelector = {props.codeSelector} setBgColor = {setBgColor} />
      </Card.Body>
    </Card>
  );
}

export default Cards;