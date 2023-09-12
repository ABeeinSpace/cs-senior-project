
import React from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";

export default function ButtonGrouping() {
  return (
    <>
      <ButtonGroup aria-label="Basic example">
        <Button className="rounded-circle me-5" variant="secondary">
          Written by a Human
        </Button>
        <Button className="rounded-circle" variant="secondary">
          Written by AI
        </Button>
      </ButtonGroup>


    </>
  );
}