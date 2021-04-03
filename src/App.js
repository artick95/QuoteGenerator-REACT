import "./App.css";
import axios from "axios";
import React, { useState } from "react";

function App() {
  //function api request for the quote
  // https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?
  const [quote, setQuote] = useState(
    "Those who excel in virtue have the best right of all to rebel, but then they are of all men the least inclined to do so."
  );

  async function getQuote() {
    const apiUrl = "https://goquotes-api.herokuapp.com/api/v1/random?count=1";
    axios
      .get(apiUrl)
      .then((response) => setQuote(response.data.quotes[0].text))
      .catch((error) => console.log(error));
  }

  return (
    <div className="wrapper">
      <div className="card">
        <div className="textButtonContainer">
          <h2 className="text">"{quote}"</h2>
          <button type="button" className="button" onClick={() => getQuote()}>
            Generate New Quote
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
