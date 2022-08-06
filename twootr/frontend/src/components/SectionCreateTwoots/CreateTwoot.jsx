import axios from "axios";
import React, { useState } from "react";
import { render } from "react-dom";
import { AppHeaderContainer, InputLastName, InputName } from './ContainerHeader.style';
import { faArrowsToCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  Container,
  MainContainer,
  Title,
  Input,
  DivDown,
  Button,
  Characters,
} from "./CreateTwootElement";

export default function CreateTwoot(props) {
  const { twoot, setTwoot } = props;
  const [formData, setFormData] = React.useState("");
  const [counterCharacters, setcounterCharacters] = React.useState("0");

  const [imgURL, setImgURL] = React.useState("");
  const [inputNameValue, setInputNameValue,] = React.useState("");
  const [inputLastNameValue, setInputLastNameValue] = React.useState("");
  const [isDisabled, setIsDisabled] = useState(false);

  const handleInputChangeName = (e) => {

    setInputNameValue(() => {

      if (e.target.value.length > 0) {
        setImgURL(
          `https://avatars.dicebear.com/api/bottts/${e.target.value}.svg`
        );
      }
      return e.target.value;
    });
  };


  const handleInputChangeLastName = (e) => {
    setInputLastNameValue(() => {
      if (e.target.value.length > 0) {
        setImgURL(
          `https://avatars.dicebear.com/api/bottts/${e.target.value}.svg`
        );
      }
      return e.target.value;
    });
  };


  function handleInputEnable() {


    setIsDisabled(!isDisabled)

  }


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted form New Twoot...");


    if (inputNameValue.length === 0 || inputLastNameValue.length === 0) {
      alert("You have to enter a name and lastname to create a twoot");
    }
    else if (!formData) {

      alert("You have to write something to create a twoot");

    } else if (formData.length > 140) {

      alert("Twoots lenght must to be less than 140 characters ");
    }
    else {

      let today = new Date();

      const thisYear = today.getFullYear();
      const thisMonth = today.getMonth() + 1;
      const thisDay = today.getDay()-1;

      let currentDate=thisYear + "-" + thisMonth + "-" + thisDay;

      let authorS = inputNameValue + "-" + inputLastNameValue;
      axios.post("/twoot", {
        newTwoot: {
          author: inputNameValue + " " + inputLastNameValue,
          content: formData,
          authorSlug: authorS.toLowerCase(),
          dateAdded: currentDate
        }
      }).then((response) => {
        console.log("response: ", response);
        window.location.reload(false);

      });
    }

  };

  const handleChange = (event) => {

    setFormData(() => {
      return event.target.value;
    });


    setcounterCharacters(() => {

      return event.target.value.length;
    });


  };

  return (

    <MainContainer>

      <AppHeaderContainer>
        <img
          src={imgURL}
          width="70px"
        ></img>
        <h1>Twootr</h1>

        < InputName className="form-control" disabled={isDisabled} onChange={handleInputChangeName} value={inputNameValue} placeholder="Name" />
        < InputLastName className="form-control" disabled={isDisabled} onChange={handleInputChangeLastName} value={inputLastNameValue} placeholder="Last Name" />
        <FontAwesomeIcon icon={faArrowsToCircle} style={{ margin: 6 }} onClick={handleInputEnable} />

      </AppHeaderContainer>
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
            <Characters >{counterCharacters}</Characters>
          </DivDown>
        </form>
      </Container>
    </MainContainer>



  );
}
