import Button from './buttonTwo';
import Card from 'react-bootstrap/Card';
import 'src/app/page.module.css'

function Cards(props) {

  return (
    <Card style={{ width: '100%' }}>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Title className="text-left">
              {props.prompt}  
            
          </Card.Title>
        <Card.Text className="text-left">
        <div class="container-fluid px-0">
          <div class="row g-0">
            <div class="col-lg-6">
          <pre>
          {props.code.split('newLine')[0]}
          <br />
          {props.code.split('newLine')[1]}
          <br />
          {props.code.split('newLine')[2]}
          <br />
          {props.code.split('newLine')[3]}
          <br />
          {props.code.split('newLine')[4]}
          <br />
          {props.code.split('newLine')[5]}
          <br />
          {props.code.split('newLine')[6]}
          <br />
          {props.code.split('newLine')[7]}
          <br />
          {props.code.split('newLine')[8]}
          <br />
          {props.code.split('newLine')[9]}
          <br />
          {props.code.split('newLine')[10]}
          <br />
          {props.code.split('newLine')[11]}
          <br />
          {props.code.split('newLine')[12]}
          </pre>

          </div>
          <div class="col-lg-6">

          <pre>
          {props.code2.split('newLine')[0]}
          <br />
          {props.code2.split('newLine')[1]}
          <br />
          {props.code2.split('newLine')[2]}
          <br />
          {props.code2.split('newLine')[3]}
          <br />
          {props.code2.split('newLine')[4]}
          <br />
          {props.code2.split('newLine')[5]}
          <br />
          {props.code2.split('newLine')[6]}
          <br />
          {props.code2.split('newLine')[7]}
          <br />
          {props.code2.split('newLine')[8]}
          <br />
          {props.code2.split('newLine')[9]}
          <br />
          {props.code2.split('newLine')[10]}
          <br />
          {props.code2.split('newLine')[11]}
          <br />
          {props.code2.split('newLine')[12]}
          </pre>

          </div>
          </div>
        </div>

        </Card.Text>
        <Button id = {props.id} prompt = {props.prompt} object = {props.object} codeSelector = {props.codeSelector}/>
      </Card.Body>
    </Card>
  );
}

export default Cards;