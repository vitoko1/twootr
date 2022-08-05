import React from "react";
import {
  Container,
  Title,
  Input,
  DivDown,
  Button,
  Characters,
} from "./CreateTwootElement";

export default function CreateTwoot() {
  const placeHolder = "What are you humming about?";

  return (
    <Container>
      <Title>Compose Twoot</Title>
      <Input placeholder="What are you humming about?"></Input>
      <DivDown>
        <Button> Twoot </Button>
        <Characters>144</Characters>
      </DivDown>
    </Container>
  );
}
