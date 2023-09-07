
import React from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
  
export default function ButtonGrouping() {
  return (
    <>
      <ButtonGroup aria-label="Basic example">
        <Button variant="info">
            Written by a Human
        </Button>
        <Button variant="danger">
            Written by AI
        </Button>
      </ButtonGroup>
    </>
  );
}