import { useState } from "react";
import "./App.css";

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
              
              src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
            />
            <div className="text">Ỏooooo, Iuu Vy thế nhòooooo</div>
          </div>
        </>
      ) : (
        <>
          <img
            
            src="https://media1.tenor.com/m/bWs4Kitqmu0AAAAC/heartbeat-heart.gif"
          />

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
