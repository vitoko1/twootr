import React, { useState } from 'react';
import { AppHeaderContainer, InputLastName, InputName } from './ContainerHeader.style';
import { faArrowsToCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Header() {


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


  return (


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


  )
}

