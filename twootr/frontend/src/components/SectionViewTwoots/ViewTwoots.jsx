import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faFlag, faRotate } from "@fortawesome/free-solid-svg-icons";
import {
  Container,
  ContainerTwoot,
  DivTop1,
  DivMid,
  DivDown,
  DivTop2,
  DivDownIcon,
} from "./ViewTwootsElement";

export default function ViewTwoots() {
  const [twoots, setTwoowts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/twoots")
      .then((response) => setTwoowts(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <Container>
      <ContainerTwoot>
        {twoots.map((twoot) => (
          <div>
            <DivTop1>
              <img
                src="https://avatars.dicebear.com/api/bottts/${authorSlug}.svg"
                width="55px"
              ></img>
              <p>{twoot.author}</p>
              <DivTop2>
                <p>{"@" + twoot.authorSlug}</p>
              </DivTop2>
            </DivTop1>
            <DivMid>
              <p>{twoot.content}</p>
            </DivMid>
            <DivDown>
              <p>{"Twooted "+twoot.dateAdded}</p>
              <DivDownIcon>
                <FontAwesomeIcon icon={faFlag} style={{ color: "red" }} />
                <FontAwesomeIcon icon={faRotate} />
                <FontAwesomeIcon icon={faHeart} />
              </DivDownIcon>
            </DivDown>
          </div>
        ))}
      </ContainerTwoot>
    </Container>
  );
}
