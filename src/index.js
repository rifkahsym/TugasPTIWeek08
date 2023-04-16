import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

const colors = ["red", "blue", "green", "yellow", "purple", "pink", "orange"];

function App() {
  const [availableColors, setAvailableColors] = useState(colors);

  useEffect(() => {
    const textElements = document.querySelectorAll(".random-color");
    textElements.forEach((element) => {
      const randomIndex = Math.floor(Math.random() * availableColors.length);
      const randomColor = availableColors[randomIndex];
      element.style.color = randomColor;

      setAvailableColors((prevColors) => [
        prevColors.slice(0, randomIndex),
        prevColors.slice(randomIndex + 1)
      ]);
    });
  }, []);

  return (
    <div>
      <h1 className="random-color">Hello World!</h1>
      <h3 className="random-color">My Name is RIFKAH SYAM</h3>
      <h3 className="random-color">Im not a nice person</h3>
      <h3 className="random-color">I love to learn JavaScript</h3>
      <h3 className="random-color">I wanna be super high quality student</h3>
      <h3 className="random-color">I am going to be super woman</h3>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
