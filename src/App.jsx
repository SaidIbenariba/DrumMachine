import { useState } from "react";
import { useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const drumPads = [
    {
      key: "Q",
      name: "Heater 1",
      url: "https://www.freesoundeffects.com/files/mp3_466176.mp3",
    },
    {
      key: "W",
      name: "Heater 2",
      url: "https://www.freesoundeffects.com/preview.php?id=39805",
    },
    {
      key: "E",
      name: "Heater 3",
      url: "https://www.freesoundeffects.com/files/mp3_89357.mp3",
    },
    {
      key: "A",
      name: "Heater 4",
      url: "https://www.freesoundeffects.com/files/mp3_466176.mp3",
    },
    {
      key: "S",
      name: "Clap",
      url: "https://www.freesoundeffects.com/files/mp3_466176.mp3",
    },
    {
      key: "D",
      name: "Open High Hat",
      url: "https://www.freesoundeffects.com/files/mp3_466176.mp3",
    },
    {
      key: "Z",
      name: "Kick n' Hat",
      url: "https://www.freesoundeffects.com/files/mp3_466176.mp3",
    },
    {
      key: "X",
      name: "Kick",
      url: "https://www.freesoundeffects.com/files/mp3_466176.mp3",
    },
    {
      key: "C",
      name: "Closed High Hat",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    },
  ];

  const [currentDrum, setDrum] = useState("");

  useEffect(() => {
    window.addEventListener("keydown", (event) => {
      const upperKey = event.key.toUpperCase();
      const foundDrum = drumPads.find((item) => item.key === upperKey);
      play(upperKey, foundDrum.name);
    });
  });

  function play(key, drum) {
    const audio = document.getElementById(key);
    setDrum(drum);
    audio.currentTime = 0;
    audio.play();
  }

  return (
    <div id="drum-machine" className="container">
      <h1 className="h1 drum-heading">React Drum Machine</h1>
      <h4 id="display">{currentDrum}</h4>
      <div className="row">
        <div className="col text-center">
          <DrumDisplay drumPads={drumPads} play={play} />
        </div>
      </div>
    </div>
  );
}

function DrumDisplay(props) {
  return props.drumPads.map((pad, index) => {
    return (
      <button
        className="drum-pad"
        onClick={() => props.play(pad.key, pad.name)}
        key={index}
        id={pad.name}
      >
        {pad.key}
        <audio className="clip" id={pad.key} src={pad.url} />
      </button>
    );
  });
}

export default App;
