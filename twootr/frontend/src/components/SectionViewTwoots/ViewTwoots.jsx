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

/* function calculateDatetoDays(d1, d2) {
  let aDate1 = d1.split("-");
  let aDate2 = d2.split("-");
  let fDate1 = Date.UTC(aDate1[2], aDate1[1] - 1, aDate1[0]);
  let fDate2 = Date.UTC(aDate2[2], aDate2[1] - 1, aDate2[0]);
  let dif = fDate2 - fDate1;
  let days = Math.floor(dif / (1000 * 60 * 60 * 24));
  

  return days;
}

let d1 = new Date();
console.log('current day', d1);
let d2 = "2022-08-14";

console.log("Days: ", calculateDatetoDays(d1, d2)); */

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
                src={
                  "https://avatars.dicebear.com/api/bottts/" +
                  twoot.authorSlug +
                  ".svg"
                }
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
              <p>{"Twooted " + twoot.dateAdded}</p>
              <DivDownIcon>
                <FontAwesomeIcon icon={faFlag} style={{ color: "red" }} />
                <FontAwesomeIcon icon={faRotate} />
                <FontAwesomeIcon icon={faHeart} />
              </DivDownIcon>
            </DivDown>
            <br />
            <br />
          </div>
        ))}
      </ContainerTwoot>
    </Container>
  );
}
