import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Main() {

  const [twoots, setTwoowts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/twoots')
      .then(response => setTwoowts(response.data))
      .catch(error => console.log(error));

  }, []);

  return (

    <div className="list-twoots">
      {twoots.map(twoot => (
        <div className="twoot">
          <p>{'id: ' + twoot._id}</p>
          <p>{'Author: ' + twoot.author}</p>
          <p>{'Content: ' +twoot.content}</p>
          <p>{'Lenght Twoot: ' +twoot.length}</p>
          <p>{'Lenght Added: ' +twoot.dateAdded}</p>
          <p>{'Lenght Modified: ' +twoot.dateModified}</p>
          <hr/>
        </div>

      ))}

    </div>
  );
}
