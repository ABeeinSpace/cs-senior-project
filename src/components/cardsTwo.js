import Button from './buttonTwo';
import Card from 'react-bootstrap/Card';
import '../app/page.module.css'
import { useState, useRef} from 'react';

function Cards(props) {
let options = props.code.split('newLine')
let optionsTwo = props.code2.split('newLine')
const [bgColor, setBgColor] = useState('white');
  return (
    <Card className = "mb-5" style={{ width: '100%', backgroundColor: bgColor }}>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Title className="text-left">
              {props.prompt}  
            
          </Card.Title>
        <Card.Text className="text-left">
        <div class="container-fluid px-0">
          <div class="row g-0">
            <div class="col-lg-6 border border-1">
          <pre>

          <div className="options">
            {options.map((option) => (
            <>
            {" " + option} <br />
            </>
            ))}
          </div>
            
          
          </pre>

          </div>
          <div class="col-lg-6 border border-1">

          <pre>
          <div className="optionsTwo">
            {optionsTwo.map((optionTwo) => (
            <>
            {" " + optionTwo} <br />
            </>
            ))}
          </div>
          </pre>

          </div>
          </div>
        </div>

        </Card.Text>
        <Button id = {props.id} prompt = {props.prompt} object = {props.object} codeSelector = {props.codeSelector} setBgColor = {setBgColor}/>
      </Card.Body>
    </Card>
  );
}

export default Cards;