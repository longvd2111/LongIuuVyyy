import { useState } from "react";
import "./App.css";
import KissVy from '../src/assets/images/KissVyy.gif';
import Vy from '../src/assets/images/Vyyy.jpg';
import Vy0 from '../src/assets/images/Vy0.png';
import vy1 from '../src/assets/images/vy1.png';

const phrases = [
  "hok",
  "éo",
  "hok baoh",
  "từ chối ",
  "năn nỉ tui ó? :< ",
  "thiệt áaaaaaaa",
  "đồ tùi tệ dám huỷ hoại chái tim tui",
  "ok ko hỏi nữa",
  "uk tôi mệt Long quá cơ, khổ lắm cơ >:(",
];

function App() {
  const [hokCount, setHokCount] = useState(0);
  const [ociPressed, setOciPressed] = useState(false);
  const ociButtonSize = hokCount * 20 + 16;

  function handleHokClick() {
    setHokCount(hokCount + 1);
  }
  function getHokButtonText() {
    return phrases[Math.min(hokCount, phrases.length - 1)];
  }

  return (
    <div className="valentine-container">
      {ociPressed ? (
        <>
          <div className="neunhu">
            <img
              
              src={KissVy}
            />
            <div className="text">Orooooo, Yêuu Vy thía nhòooo !!!!!</div>
          </div>
        </>
      ) : (
        <>
          <img className="img" src={Vy0}></img>

          <div>Vy oiiii,will diu be mai va len taiii?</div>
          <div>
            <button
              className="ociButton"
              style={{ fontSize: ociButtonSize }}
              onClick={() => setOciPressed(true)}
            >
              Đồng ý lunnn
            </button>
            <button onClick={handleHokClick} className="hokButton">
              {getHokButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
