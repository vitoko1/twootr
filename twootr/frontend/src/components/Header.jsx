import React, { useState } from 'react';
import { AppHeaderContainer, InputLastName, InputName, AvatarImage } from './ContainerHeader.style';




export default function Header() {


  const [imgURL, setImgURL] = React.useState("");
  const [inputNameValue, setInputNameValue,] = React.useState("");
  const [inputLastNameValue, setInputLastNameValue] = React.useState("");


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


  return (


    <AppHeaderContainer>
      <img
        src={imgURL}
        width="70px"

      ></img>
      <h1>Twootr</h1>
      < InputName className="form-control" onChange={handleInputChangeName} value={inputNameValue} placeholder="Name" />
      < InputLastName className="form-control" onChange={handleInputChangeLastName} value={inputLastNameValue} placeholder="Last Name" />


    </AppHeaderContainer>


  )
}

