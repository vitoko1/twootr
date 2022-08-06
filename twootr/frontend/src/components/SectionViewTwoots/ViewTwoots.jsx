import React from "react";
import axios from "axios";
import "./App.css";
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
  let today = new Date();

  const thisYear = today.getFullYear();
  const thisMonth = today.getMonth() + 1;
  const thisDay = today.getDay()-1;

  let dateFull = [thisYear + "-" + thisMonth + "-" + thisDay];

  const [twoots, setTwoowts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/twoots")
      .then((response) => setTwoowts(response.data))
      .catch((error) => console.log(error));
  }, []);

  function dateToday(dayposted) {
    let date1 = new Date(dateFull).getTime();
    let date2 = new Date(dayposted).getTime();
    let diff = date1 - date2;
    let days = diff / (1000 * 60 * 60 * 24);

    return days;
  }

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
              <p>{"Twooted " + dateToday(twoot.dateAdded) + " Days ago"}</p>
              <DivDownIcon>
                <FontAwesomeIcon id="flag" icon={faFlag} />
                <FontAwesomeIcon id="arrow" icon={faRotate} />
                <FontAwesomeIcon id="heart" icon={faHeart} />
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
