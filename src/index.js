import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import emojipedia from "./emojipedia";

const shortMeaning = emojipedia.map(function(entry) {
    return entry.meaning.substring(0,100)
});

console.log(shortMeaning);

ReactDOM.render(<App />, document.getElementById("root"));
