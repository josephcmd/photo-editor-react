import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  let [src, setSrc] = useState("");
  let [slider, setSlider] = useState(100);
  let [stile, setStile] = useState("");
  let [word, setWord] = useState();
  useEffect(() => {
    if (word === "hue-rotate(") {
      setStile(word + `${slider}deg)`);
    } else if (word === "blur(") {
      setStile(word + `${slider}px)`);
    } else {
      setStile(word + `${slider}%)`);
    }
    console.log(stile);
  }, [slider]);
  return (
    <React.Fragment>
      <div class="sidenav">
        <a onClick={() => setWord("brightness(")} href="#">
          Brightnes
        </a>
        <hr className="bg-white"></hr>
        <a onClick={() => setWord("contrast(")} href="#">
          Contrast
        </a>
        <hr className="bg-white"></hr>
        <a onClick={() => setWord("saturate(")} href="#">
          Saturation
        </a>
        <hr className="bg-white"></hr>
        <a onClick={() => setWord("grayscale(")} href="#">
          Grayscale
        </a>
        <hr className="bg-white"></hr>
        <a onClick={() => setWord("sepia(")} href="#">
          Sepia
        </a>
        <hr className="bg-white"></hr>
        <a onClick={() => setWord("hue-rotate(")} href="#">
          Hue Rotate
        </a>
        <hr className="bg-white"></hr>
        <a onClick={() => setWord("blur(")} href="#">
          Blur
        </a>
        <hr className="bg-white"></hr>
      </div>
      <div className="container">
        <div class="main">
          <img style={{ filter: stile }} className="img-fluid" src={src}></img>
          <div class="slidecontainer">
            <input
              type="file"
              onChange={(e) => setSrc(URL.createObjectURL(e.target.files[0]))}
              accept="image/*"
              name="image"
              id="file"
            />
            <p>
              Range slider: {word} {slider}%
            </p>
            <input
              onChange={(e) => setSlider(e.target.value)}
              type="range"
              min="1"
              max="200"
              value={slider}
              class="slider"
              id="myRange"
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
