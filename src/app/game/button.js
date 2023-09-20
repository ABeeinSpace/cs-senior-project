
import React from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
require('dotenv').config()


export default function ButtonGrouping(props) {
  function handleClickHuman() {
    console.log('You believe this code was written by a human'); 
    console.log(props.id)
  }

  function handleClickAI() {
    console.log('You believe this code was written by AI');
  }

  
  return (
    <>
      <ButtonGroup aria-label="Basic example">
        <Button id = "Test" className="rounded-circle me-5" variant="secondary" onClick={handleClickHuman}>
          Written by a Human
        </Button>
        <Button className="rounded-circle" variant="secondary"onClick={handleClickAI}>
          Written by AI
        </Button>
      </ButtonGroup>


    </>
  );
  }

