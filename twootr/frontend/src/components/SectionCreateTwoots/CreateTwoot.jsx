import axios from "axios";
import React, { useState } from "react";
import { render } from "react-dom";

import {
  Container,
  Title,
  Input,
  DivDown,
  Button,
  Characters,
} from "./CreateTwootElement";

export default function CreateTwoot(props) {
  const { twoot, setTwoot } = props;
  const [formData, setFormData] = useState("");
  const [author, setAuthor] = useState("Jhon Doe");
  const [authorSlug, setAuthorSlug] = useState("@John-Doe");
  const [dateAdded, setDateAdded] = useState("2022-08-05");


  const newTwoot = {
    author: author,
    content:'contenido',
    authorSlug: authorSlug,
    dateAdded: dateAdded
  };
  console.log("New Twoot:", newTwoot);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted form New Twoot...");

    axios.post("/twoot", { newTwoot: {author: author,
      content:formData.value,
      authorSlug: authorSlug,
      dateAdded: dateAdded}}).then((response) => {
      console.log("response: ", response);
      window.location.reload(false);
      e.preventDefault();

     // const newFormData = [...twoot, { ...response.data }];
    //  setTwoot(newFormData);
      //console.log("Twoot send...: ", setTwoot);
    });

    
    //.cath((error) => console.log("error", error.res.data));
  };

  const handleChange = (event) => {
    let value = event.target.value;

    const newFormData = { ...formData, value };
    console.log("newFormData", newFormData);
    setFormData(newFormData);
  };

  return (
    <Container>
      <Title>Compose Twoot</Title>
      <form action="" onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="What are you humming about?"
          value={twoot}
          onChange={handleChange}
        ></Input>
        <DivDown>
          <Button type="submit"> Twoot </Button>
          <Characters>144</Characters>
        </DivDown>
      </form>
    </Container>
  );
}
