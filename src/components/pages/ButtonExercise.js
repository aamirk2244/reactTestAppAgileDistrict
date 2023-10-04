import { useState } from "react";
import Button1 from "../home/Button1";
import Button2 from "../home/Button2";
import Button3 from "../home/Button3";

function ButtonExercise() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="button-exercise">
      <div className="card d-flex text-center">
        <div className="card-header">
          <button
            className={`btn m-1 ${
              counter === 1 ? "btn-primary" : "btn-secondary"
            }`}
            onClick={() => setCounter(1)}
          >
            ClickMe
          </button>
          <button
            className={`btn m-1 ${
              counter === 2 ? "btn-primary" : "btn-secondary"
            }`}
            onClick={() => setCounter(2)}
          >
            No Me
          </button>
          <button
            className={`btn m-1 ${
              counter === 3 ? "btn-primary" : "btn-secondary"
            }`}
            onClick={() => setCounter(3)}
          >
            What do you want?
          </button>
        </div>
        <div className="card-body">
          <h5 className="card-title"></h5>
          <div className="card-text">
            {(counter === 1 && <Button1 />) ||
              (counter === 2 && <Button2 />) ||
              (counter === 3 && <Button3 />)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ButtonExercise;
